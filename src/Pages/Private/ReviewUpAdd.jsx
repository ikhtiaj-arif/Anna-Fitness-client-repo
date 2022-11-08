import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useLoaderData } from "react-router-dom";

const ReviewUpAdd = () => {
  const { user } = useContext(AuthContext);
  const program = useLoaderData();
  const [rating, setRating] = useState(0);
  const { title, _id } = program;
  console.log(rating);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const contact = form.contact.value;


        const review = {
            program_id: _id,
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
            feedback: feedback,
            rating,
            contact: contact
          };

          console.log(review, user)

    }












  return (
    <div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <h2 className="text-xl font-medium">{user?.displayName}</h2>

      <form 
      onSubmit={handleSubmit}
      className="md:w-2/4">
        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Large input
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
            Small input
          </label>
          <input
            type="number"
            name='contact'
            id="small-input"
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
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <button className="btn btn-danger">Add Review</button>
      </form>
    </div>
  );
};

export default ReviewUpAdd;
