import React from "react";
import { Link } from 'react-router-dom';
import trainer from "../../../images/anna-box (1).jpg";
import trainer2 from "../../../images/anna-box (2).jpg";

const Trainer = () => {
  return (
    <div className="mt-10 h-auto md:grid rounded bg-gradient-to-r from-green-300 to-lime-200 grid-cols-2 md:mt-20">
      <div className="grid grid-cols-2 h-86 relative ">
        <div>
        </div>
        <div className="">
          <img src={trainer} className="z-10" alt="" />
        </div>
        
        <div className=" ">
          <img src={trainer2} className="" alt="" />
        </div>
      </div>

      <div className=" w-full  md:mt-20 z-20 h-auto p-10 lg:px-18">

            <h1 className='text-5xl font-bold'>HI! MY NAME IS Anna </h1>
            <p className='my-5'>ras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tellus id interdum velit laoreet id donec ultrices tincidunt. Tincidunt augue interdum velit euismod.</p>

            <Link to='/register'><button className="btn btn-primary w-full lg:w-3/4">Learn More About Me</button></Link>
            </div>
    </div>
  );
};

export default Trainer;
