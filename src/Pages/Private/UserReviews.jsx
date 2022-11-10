import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { tabTitle } from "../../utilities/titleChange";
import ReviewCard from "./ReviewCard";
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";

const UserReviews = () => {
  tabTitle('Your Reviews')
  const { user, loading } = useContext(AuthContext);
  // users reviews
  const [userReviews, setUserReviews] = useState([]);
 

  useEffect(() => {
    fetch(
      `https://annas-fitness-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, [user?.email]);





  // delete review
  const handleDelete = (ID) => {
    // console.log(remaining);

    const continueDelete = window.confirm("Sure You Want To Delete?");
    if (continueDelete) {
      fetch(`https://annas-fitness-server.vercel.app/review/${ID}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = userReviews.filter((item) => item._id !== ID);
            toast.success('Delete Successfully!');
            setUserReviews(remaining);
          
          }
        });
    }
  };
 

  return (
    <div className="md:w-3/4 mx-auto text-center mt-20">
     
      {
        (userReviews.length < 1) ? 
        <>
        <h2 className="mb-5 text-5xl font-bold">No <span className="text-primary">Reviews</span> Added</h2>
        <p className="my-5 font-medium">
            Please Add A Review To Our Programs.
         </p>
          <Link to='/'><button className="btn btn-primary w-full text-lg lg:w-2/4">Add A Review</button>
    </Link>

        </>
        :

<>
<h2 className="mb-5 text-5xl font-bold">Your <span className="text-primary">Reviews:</span> </h2>
      {userReviews.map((review) => (
        <ReviewCard
        key={review._id}
        handleDelete={handleDelete}
        review={review}
        ></ReviewCard>
        ))}
      </>
      }

    </div>
  );
};

export default UserReviews;
