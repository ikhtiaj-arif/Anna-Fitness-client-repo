import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useLoaderData,useNavigate } from "react-router-dom";
import { tabTitle } from "../../utilities/titleChange";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const ReviewUpAdd = () => {
  tabTitle('Add Review')
  const { user } = useContext(AuthContext);
  const program = useLoaderData();
  const [rating, setRating] = useState(0);
  const { title, _id, image, details } = program;
  const navigate = useNavigate()

  // post reviews
  const handlePostToDb = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    const contact = form.contact.value;
    const email = user?.email || "Not Registered";
    const photoURL = user?.photoURL || "Not Registered";
    const displayName = user?.displayName || "Not Registered";
    const ID = _id;
    const time = new Date().getTime() / 1000;

    const review = {
      programId: ID,
      programName: title,
      email,
      displayName,
      photoURL,
      rating,
      feedback: feedback,
      contact: contact,
      time,
    };

    const url = "https://annas-fitness-server.vercel.app/reviews";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Review Added Successfully!')
          form.reset();
          navigate(`/program/${ID}`)
        }
      })
      .catch((e) => toast.error(e.message));

    //   console.log(review)
  };

  return (
    <div className="mt-20">
      <h2 className=" p-3 text-xl font-medium">Hello : {user?.displayName}</h2>
      <p className="px-3 font-medium">Please Review Our Program</p>
    <div className="md:grid grid-cols-2 mt-20 bg-gradient-to-b p-5 from-blue-200 to-green-300 rounded-xl">
      <div className="p-5 ">
        <h2 className="text-4xl py-4 font-bold">{title}</h2>
        <p className="font-medium py-2">{details}</p>
        <img className="rounded-xl" src={image} alt="" />
      </div>
      <div className="lg:flex bg-gradient-to-b p-5 from-blue-200 to-green-300 rounded-xl">
        <form onSubmit={handlePostToDb} className="md:w-3/4 mx-auto">
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 font-medium text-gray-900 text-2xl py-4"
            >
              Give A Feedback :
            </label>
            <input
              type="text"
              name="feedback"
              id="large-input"
              class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Order Number :
            </label>
            <input
              type="number"
              name="contact"
              id="small-input"
              class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="star-rating py-5">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= rating ? "text-yellow-300" : "text-gray-200"}
                  onClick={() => setRating(index)}
                >
                  <span className="star"><FaStar/></span>
                </button>
              );
            })}
          </div>
          <button 
          type="submit"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Submit Review
  </span>
</button>
        </form>

        </div>
        
      </div>
    </div>
  );
};

export default ReviewUpAdd;
