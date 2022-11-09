import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import EachReviewCard from "./EachReviewCard";

const ProgramDetails = () => {
  const program = useLoaderData();
  const { _id, details, image, price, price2, title, info, info_2 } = program;

  // load all reviews
  const [allReviews, setAllReviews] = useState([]);
  console.log(allReviews);

  useEffect(() => {
    fetch(`https://annas-fitness-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [_id]);

  return (
    <div className="lg:flex ">
      <div className="program-details lg:w-3/4">
        add a component
        <div>
          <h2>{info_2.title}</h2>
          <img src={info_2.image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
          <h2>{title}</h2>
          <p>{details}</p>
          <h2>{price}</h2>
          <h2>{price2}</h2>
        </div>
        <div>
          <h2>{info.title}</h2>
          <img src={info.image} alt="" />
        </div>
      </div>
      <div className="review-section text-center bg-gray-200 w-full lg:w-1/4">
        <h2>this is review section</h2>
        <h2>load all reviews</h2>
        <Link to={`/reviews/${_id}`}>
          <button className="btn btn-success">add review</button>
        </Link>
        {allReviews.map((eachReview) => (
          <EachReviewCard
            key={eachReview._id}
            eachReview={eachReview}
          ></EachReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ProgramDetails;
