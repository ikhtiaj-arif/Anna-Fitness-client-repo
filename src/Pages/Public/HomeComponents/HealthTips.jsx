import React from "react";
import { Link } from 'react-router-dom';
import Action from "../../../Components/Action";
import anna from '../../../images/anna (3).png';

const HealthTips = () => {
  return (
    <div className="lg:w-3/4 mx-auto md:flex mt-10 md:mt-32 bg-gradient-to-r from-lime-400 ...">
      <div className=" w-full md:w-2/4 md:mt-32 z-20 h-auto lg:w-2/4 p-10">
        <h1 className="mb-5 text-5xl font-bold">HEALTHY TIPS & TRICKS</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <div  className="w-3/4 mx-auto">

        <Link to='/register'>
           <Action title="View ALl Tips"/>
          </Link>
        </div>
      </div>
        <div>
            <img src={anna} alt="" />
        </div>
     
    </div>
  );
};

export default HealthTips;
