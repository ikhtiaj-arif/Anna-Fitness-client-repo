import React from "react";
import anna1 from '../../../images/anna (1).png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (



    <div className="bg-gradient-to-l from-green-200  md:flex mt-10 md:mt-20 relative">
     <div className=" w-full md:w-2/4 md:mt-32 z-20 h-auto lg:w-2/4 p-10">
       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
       <h1 className="mb-5 text-3xl font-bold text-lime-500">I am Anna Willer</h1>
       <p className="mb-5">
       The athlean look is muscular, strong, and ripped. It is the ideal balance of muscle to body fat that is optimized for performance without sacrificing aesthetics. Each of our training programs is designed to achieve that goal. While we do offer programs that allow for focused muscle growth or fat loss we never lose sight of the ultimate goal…looking, feeling and moving like an athlete!
         </p>
          <Link to='register'><button className="btn btn-primary w-full lg:w-2/4">Get Started</button></Link>
     </div>
     <div>
      <img src={anna1} className="relative z-20" alt="" />
     </div>
     <div className="w-full md:w-2/4 lg:w-3/5 bg-lime-300 h-64 absolute z-10 bottom-0">

     </div>
  </div>


    // <div
    //   className="hero min-h-screen"
    //   style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    // >
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       
    //       
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
