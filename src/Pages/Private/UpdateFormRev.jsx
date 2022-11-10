import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { tabTitle } from "../../utilities/titleChange";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const UpdateFormRev = () => {
  tabTitle("Update Reviews");
  const [rating, setRating] = useState(0);
  const review = useLoaderData();
  const [upReview, setUpReview] = useState(review);
  const { _id, programId, email } = review;
  const navigate = useNavigate();

  // get the program details
  const [currProgram, setCurrProgram] = useState([]);
  const { image, title, details, price, price2 } = currProgram;

  useEffect(() => {
    fetch(`https://annas-fitness-server.vercel.app/program/${programId}`)
      .then((res) => res.json())
      .then((data) => setCurrProgram(data));
  }, [programId]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    const contact = form.contact.value;
    const time = new Date().getTime() / 1000;

    const update = {
      rating,
      feedback: feedback,
      contact: contact,
      time,
      email,
    };
    fetch(`https://annas-fitness-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount > 0) {
          // toast
          form.reset();
          toast.success("Update Successful!");
          setUpReview(update);
          navigate("/userReview");
        }
      });
  };

  return (
    <div>
      <div className="program-details md:flex mt-20">
        <img src={image} alt="" className="w-3/4 md:w-2/4" />
        <div className="p-5  ">
          <h2 className="text-4xl py-4 font-bold">{title}</h2>
          <p className="font-medium py-2">{details}</p>
          <div className="flex justify-evenly">
            <p>
              <span className="text-3xl font-bold text-green-500">{price}</span>{" "}
              <span className="text-lg font-medium">/month</span>
            </p>
            <p>
              <span className="text-3xl font-bold text-blue-500">{price2}</span>{" "}
              <span className="text-lg font-medium">/month</span>
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleUpdate} className="md:w-3/4 mx-auto">
        <div className="mb-6">
          <label
            for="large-input"
            className="block mb-2 font-medium text-gray-900 text-2xl py-4"
          >
            Your Review :
          </label>
          <input
            defaultValue={upReview.feedback}
            type="text"
            name="feedback"
            id="large-input"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Order Number :
          </label>
          <input
            defaultValue={upReview.contact}
            type="number"
            name="contact"
            id="small-input"
            className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="star-rating py-5">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                defaultValue={upReview.rating}
                key={index}
                className={
                  index <= rating ? "text-yellow-300" : "text-gray-200"
                }
                onClick={() => setRating(index)}
              >
                <span className="star">
                  <FaStar />
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit Review
          </span>
        </button>
      </form>
    </div>
  );
};

export default UpdateFormRev;
