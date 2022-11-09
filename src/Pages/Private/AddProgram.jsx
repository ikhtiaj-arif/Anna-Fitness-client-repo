import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const AddProgram = () => {

const {user} = useContext(AuthContext);

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
    name: user?.displayName
  
  };
 
  fetch('http://localhost:5000/allPrograms',{
    method: "POST",
    headers: {
      'content-type': 'application/json',
      authorization : `Bearer ${localStorage.getItem("user-token")}`
    },
    body: JSON.stringify(program)
  })
  .then(res => res.json())
  .then(data => {
    if(data.acknowledged) {
      // toast
      alert('successfully added!')
      form.reset();
      // navigete 
    }
  })


  }


  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <form
        onSubmit={handlePostToDb}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Inormation</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="state" className="text-sm">
                State / Province
              </label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
            <p className="text-xs">Adipisci fuga autem eum!</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-sm">
                Course Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="course title"
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
              <label for="bio" className="text-sm">
                Photo
              </label>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/30x30/?random"
                  alt=""
                  className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <button
                  type="submit"
                  className="px-4 py-2 border rounded-md dark:border-gray-100"
                >
                  ADD Your Program
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
