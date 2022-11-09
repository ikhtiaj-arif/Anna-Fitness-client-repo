import React, { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";

const Programs = () => {
  // all program data
  const [allPrograms, setAllPrograms] = useState([]);
  const [loadPrograms, setLoadPrograms] = useState([]);
  const [programCount, setProgramCount] = useState(0);
  useEffect(() => {
    fetch("https://annas-fitness-server.vercel.app/allPrograms")
      .then((res) => res.json())
      .then((data) => {
        setAllPrograms(data);
        setProgramCount(data.length);
      });
  }, []);

  const [size, setSize] = useState(3);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(programCount / size);

  useEffect(() => {
    fetch(
      `https://annas-fitness-server.vercel.app/filterPrograms?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadPrograms(data);
      });
  }, [page, size]);

  // all program data end

  return (
    <div className="mt-10 md:mt-20">
      <h1 className="mb-5 text-5xl font-bold text-center text-lime-400">
        See The Fitness Programs
      </h1>
      <h2 className="text-xl font-medium text-center mb-10">
        Currently Available : {programCount}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loadPrograms.map((program) => (
          <ProgramCard key={program._id} program={program}></ProgramCard>
        ))}
      </div>
      {/* pagination section */}
      <div className="flex mt-10 justify-center space-x-1 dark:text-gray-100">
        {[...Array(pages).keys()].map((e) => (
          <button
            key={e}
            className="items-center justify-center font-semibold w-8 h-8 text-sm border rounded shadow-md text-white bg-green-600"
            onClick={() => setPage(e)}
          >
            {e}
          </button>
        ))}
        <button
         className="items-center justify-center font-semibold border px-2 rounded shadow-md text-white bg-green-600"
        onClick={() => setLoadPrograms(allPrograms)}>
          see all..
        </button>
      </div>
    </div>
  );
};

export default Programs;
