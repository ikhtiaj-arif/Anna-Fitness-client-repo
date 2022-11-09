import React from "react";
import anna1 from '../../../images/anna (1).png'

const Banner = () => {
  return (



    <div className="bg-gradient-to-l from-green-200  md:flex mt-10 md:mt-20 relative">
     <div className=" w-full md:w-2/4 md:mt-32 z-20 h-auto lg:w-2/4 p-10">
       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
       <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
           a id nisi.
         </p>
          <button className="btn btn-primary w-full lg:w-2/4">Get Started</button>
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
