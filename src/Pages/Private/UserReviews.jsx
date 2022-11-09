import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import ReviewCard from "./ReviewCard";

const UserReviews = () => {
  const { user } = useContext(AuthContext);
  // users reviews
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
      headers: {
        authorization : `Bearer ${localStorage.getItem("user-token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, [user?.email]);

  // delete review
  const handleDelete = (ID) => {
    // console.log(remaining);
   
  
    const continueDelete = window.confirm("Sure You Want To Delete?");
    if (continueDelete) {
      fetch(`http://localhost:5000/review/${ID}`, {
        method: "DELETE",
        headers: {
          authorization : `Bearer ${localStorage.getItem("user-token")}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = userReviews.filter((item) => item._id !== ID);
            setUserReviews(remaining);
            // toast
            alert("successfully deleted!!!");
          }
        });
    }
  };

  return (
    <div>
      <h2>Your Reviews: </h2>
      {userReviews.map((review) => (
        <ReviewCard
          key={review._id}
          handleDelete={handleDelete}
          review={review}
        ></ReviewCard>
      ))}
    </div>
  );
};

export default UserReviews;
