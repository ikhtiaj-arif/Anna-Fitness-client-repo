import React from "react";

const ReviewCard = ({ review }) => {
    const {programName, feedback, rating, programId, _id} = review;
  // fetch to get common data
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl m-10">
        <figure>
          <img src="https://placeimg.com/200/280/arch" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{programName}</h2>
          <p>{feedback}</p>
          <p>add stars:  {rating}</p>
          <div className="">
            <button className="btn btn-error">delete</button>
            <button className="btn btn-primary">Update Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
