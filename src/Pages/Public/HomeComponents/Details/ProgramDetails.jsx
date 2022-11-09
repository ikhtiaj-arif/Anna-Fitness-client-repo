import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import EachReviewCard from "./EachReviewCard";
import { PhotoView } from "react-photo-view";
import { FaArrowAltCircleRight } from 'react-icons/fa';

const ProgramDetails = () => {
  const program = useLoaderData();
  const { _id, details, image, price, price2, title, info, info_2 } = program;
console.log(program);
  // load all reviews
  const [allReviews, setAllReviews] = useState([]);
  console.log(allReviews);

  useEffect(() => {
    fetch(`https://annas-fitness-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [_id]);

  return (
    <div className="lg:flex mt-20">
      <div className="program-details xl:w-3/4">
        <div>
          <h2 className="mb-5 text-5xl font-bold">{info_2.title}</h2>
          <PhotoView src={info_2.image}>
            <img src={info_2.image} style={{ objectFit: "cover" }} alt="" />
          </PhotoView>
        </div>
        <div className=" mt-20 bg-gradient-to-l from-cyan-200 p-10">
          <h2 className="mb-5 text-5xl font-bold">{title}</h2>
          <p className="my-5">{details}</p>
          <ul>
              {info_2.bullet.map((e, idx)=> <li
              key={idx}
              className="flex items-center font-medium"
              ><FaArrowAltCircleRight className="mx-2 text-blue-500"/>  {e}</li>)}
            </ul>
         
        </div>
        <div className="md:flex">
          
          <PhotoView src={info.image}>
            <img src={info.image} style={{ objectFit: "cover" }} alt="" />
          </PhotoView>
         <div className="p-5 text-center  bg-gradient-to-l from-cyan-200">
         <h2 className="mb-5 text-5xl font-bold">{info.title}</h2>
          <p className="my-5">{info.about}</p>
          <div className="flex justify-evenly">
          <p ><span className="text-3xl font-bold text-cyan-500">{price}</span>  <span className="text-lg font-medium">/month</span></p>
          <p><span className="text-3xl font-bold text-blue-500">{price2}</span>  <span className="text-lg font-medium">/month</span></p>
          </div>

         </div>
         
        </div>
      </div>
      <div className="review-section text-center px-2 w-full lg:w-2/6">
        
        <h2  className="mb-5 text-4xl font-bold p-4">All User Reviews</h2>
        <Link to={`/reviews/${_id}`}>
          <button className="btn btn-success w-full">add a review</button>
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
