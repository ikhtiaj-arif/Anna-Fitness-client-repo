import React from "react";

const Benefits = () => {
  return (
    <div className="mt-10 md:mt-20">
      <h1 className="text-center">
        <span className="mb-5 text-5xl font-bold text-gray-600 ">
          BENEFITS OF PERSONAL
        </span>
        <br />
        <span className="mb-5 text-5xl font-bold  text-lime-400">TRAINING</span>
      </h1>

      <div className="m-5 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="bg-gradient-to-t from-green-300 to-white mt-5 md:p-5 rounded-md shadow-lg shadow-gray-500/40">
          <h1 className="text-3xl text-gray-600 w-3/4 pl-2 py-2 font-semibold border-b-2 border-r-2 border-lime-400">
            Nutrition Strategies
          </h1>
          <p className="p-4 text-center">
            Quis varius quam quisque id diam vel. Lobortis scelerisque
            fermentum.
          </p>
        </div>
        <div className="bg-gradient-to-t from-green-300 mt-5 md:p-5 rounded-md shadow-lg shadow-gray-500/40">
          <h1 className="text-3xl text-gray-600 w-3/4 pl-2 py-2 font-semibold border-b-2 border-r-2 border-lime-400">
            Workout Routines
          </h1>
          <p className="p-4 text-center">
            {" "}
            Quis varius quam quisque id diam vel. Lobortis scelerisque
            fermentum.
          </p>
        </div>
        <div className="bg-gradient-to-t from-green-300 mt-5 md:p-5 rounded-md shadow-lg shadow-gray-500/40">
          <h1 className="text-3xl text-gray-600 w-3/4 pl-2 py-2 font-semibold border-b-2 border-r-2 border-lime-400">
            Individual Support
          </h1>
          <p className="p-4 text-center">
            Quis varius quam quisque id diam vel. Lobortis scelerisque
            fermentum.
          </p>
        </div>
        <div className="bg-gradient-to-t from-green-300 mt-5 md:p-5 rounded-md shadow-lg shadow-gray-500/40">
          <h1 className="text-3xl text-gray-600 w-3/4 pl-2 py-2 font-semibold border-b-2 border-r-2 border-lime-400">
            First-Hand Advice
          </h1>
          <p className="p-4 text-center">
            Quis varius quam quisque id diam vel. Lobortis scelerisque
            fermentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
