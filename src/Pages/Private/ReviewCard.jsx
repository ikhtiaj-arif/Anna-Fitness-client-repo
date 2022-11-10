import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review, handleDelete }) => {
  const { programName, feedback, rating, programId, _id } = review;
  const [program, setProgram] = useState([]);

  // program details
  useEffect(() => {
    fetch(`https://annas-fitness-server.vercel.app/program/${programId}`)
      .then((res) => res.json())
      .then((data) => setProgram(data));
  }, [programId]);

  return (
    <div className=" lg:mt-32">
      <div className="card card-side bg-base-100 shadow-xl m-10">
        <div>
          <img src={program.image} className="" alt="Movie" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{programName}</h2>
          <p className="text-gray-700 font-medium">{feedback}</p>
          <div className="text-gray-600 text-lg  flex items-center">
            Your Rating:
            <div className=" text-yellow-500 ml-2 flex">
              {[...Array(rating)].map((e, idx) => (
                <FaStar key={idx}></FaStar>
              ))}
            </div>
          </div>
          <div className=" flex justify-around">
            <button
              onClick={() => handleDelete(_id)}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Delete
              </span>
            </button>
            <Link to={`/updateForm/${_id}`}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Update
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
