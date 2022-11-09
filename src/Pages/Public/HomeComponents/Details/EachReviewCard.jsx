import React from "react";
import { FaStar } from "react-icons/fa";

const EachReviewCard = ({eachReview}) => {
    const {displayName, photoURL, rating, feedback, time} = eachReview;
    // sort acording to date
  return (
    <div className="mt-5 bg-gradient-to-t from-green-200 container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={photoURL}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{displayName}</h4>
            <span className="text-sm dark:text-gray-400">{time}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-yellow-500">
         <FaStar/>
          <span className="text-xl font-bold">{rating}</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p className="text-gray-800 font-medium">
          {feedback}
        </p>
       
      </div>
    </div>
  );
};

export default EachReviewCard;
