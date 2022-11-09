import React from "react";
import anna from '../../../images/anna3.png'

const GetReady = () => {
  return (
    <div className="bg-gradient-to-b from-green-200  md:flex h-screen justify-center mb-52 flex-row-reverse mt-52 items-center ">
     
      <div className=" w-full md:w-2/4 z-20 h-auto lg:w-2/4 p-10">
        <h1 className="mb-5 text-5xl font-bold">READY TO GET STARTED</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary w-full lg:w-2/4">Join Now</button>
      </div>
      <div className="w-2/4 md:pl-20 lg:pl-32 mx-auto">
        
      <img src={anna} className="" alt="" />
      </div>
    </div>
  );
};

export default GetReady;
