import React from "react";
import anna from '../../../images/anna (3).png'

const HealthTips = () => {
  return (
    <div className="md:flex mt-10 md:mt-32 bg-gradient-to-r from-lime-400 ...">
      <div className=" w-full md:w-2/4 md:mt-32 z-20 h-auto lg:w-2/4 p-10">
        <h1 className="mb-5 text-5xl font-bold">HEALTHY TIPS & TRICKS</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary w-full lg:w-2/4">View ALl Tips</button>
      </div>
        <div>
            <img src={anna} alt="" />
        </div>
     
    </div>
  );
};

export default HealthTips;
