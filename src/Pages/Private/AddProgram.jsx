import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { tabTitle } from "../../utilities/titleChange";

const AddProgram = () => {
  tabTitle("Add Your Program");
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlePostToDb = (event) => {
    event.preventDefault();
    const form = event.target;
    const details = form.details.value;
    const title = form.title.value;

    const image = form.image.value;
    const price = form.price.value;

    const program = {
      title,
      details,
      image,
      price,
      email: user?.email,
      name: user?.displayName,
    };

    fetch("https://annas-fitness-server.vercel.app/allPrograms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify(program),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Added!");
          form.reset();
          navigate("/");
        }
      });
  };

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50 mt-20">
      <form
        onSubmit={handlePostToDb}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-2 flex items-center">
          <img
            src={user?.photoURL}
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
          />
          <div className="ml-2">
            <p className="font-medium">{user?.displayName}</p>
            <p className="text-xs">{user?.email}</p>
          </div>
        </div>
        <h2 className="ml-2 text-4xl font-bold text-gray-700">
          Create Your Own Fitness Program :
        </h2>
        <fieldset className="grid grid-cols-4 gap-6 px-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-sm">
                Program Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="program title"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
              <label for="username" className="text-sm">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                placeholder="price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-sm">
                Image URL
              </label>
              <input
                id="website"
                type="text"
                name="image"
                placeholder="https://"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Details
              </label>
              <textarea
                id="bio"
                name="details"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <div className="flex items-center space-x-2">
                <button
                  type="submit"
                  className="text-md relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Add Your Program To The List
                  </span>
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddProgram;
