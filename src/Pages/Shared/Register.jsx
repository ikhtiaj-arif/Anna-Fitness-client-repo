import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Register = () => {
    const {createUser, updateUserName, googleLogin, setUser, logOutUser} = useContext(AuthContext);


    const handleSignUp =(event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        const repeatPassword = form.repeatPassword.value;

       

        createUser(email, password)
        .then(result => {
            const user = result.user;
            setName(name);
            setUser(user);
            // navigate(from, {replace: true})

            console.log(user)
        })
        .catch(e => console.log(e))
    }

    const setName = (name) => {
        const profile = {
            displayName: name
        }
        updateUserName(profile)
        .then( ()=> {})
        .catch(e => console.log(e))
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result =>{
            const user = result.user;
            setUser(user)

        })
        .catch(e => console.log(e))
    }

    const handleLogOut = () => {
        logOutUser()
        .then(()=>{})
        .catch(e=>console.log(e))
    }

    
  return (
    <div className="h-screen md:w-3/4 mx-auto mt-28">
      <div className="text-center mb-16">
        <h2>Create A New Account</h2>
      </div>
      <form onSubmit={handleSignUp}>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="name"
            
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Jeff thompson"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Repeat password
          </label>
          <input
            type="password"
            name="repeatPassword"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              name="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <Link
              to="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>
  );
};

export default Register;
