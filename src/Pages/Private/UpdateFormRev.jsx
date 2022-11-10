import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { tabTitle } from "../../utilities/titleChange";

const UpdateFormRev = () => {
  tabTitle('Update Reviews')
  const [rating, setRating] = useState(0);
  const review = useLoaderData();
  const [upReview, setUpReview] = useState(review);
  const { _id, programId, email } = review;

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
          setUpReview(update);
          // navigate
          alert("update successful");
        }
      });
  };

  return (
    <div>
      <div className="program-details md:flex">
        <img src={image} alt="" />
        <div>
          <h2>{title}</h2>
          <p>{details}</p>
          <p>
            {price} :{price2}
          </p>
        </div>
      </div>
      <h2>Your Review</h2>
      <form onSubmit={handleUpdate} className="md:w-2/4 mx-auto">
        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Feedback
          </label>
          <input
            type="text"
            name="feedback"
            id="large-input"
            defaultValue={upReview.feedback}
            class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="small-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Contact Number
          </label>
          <input
            type="number"
            name="contact"
            id="small-input"
            defaultValue={upReview.contact}
            class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= rating ? "on" : "off"}
                onClick={() => setRating(index)}
                defaultValue={upReview.review}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <button type="submit" className="btn btn-info">
          Update Review
        </button>
      </form>
    </div>
  );
};

export default UpdateFormRev;
