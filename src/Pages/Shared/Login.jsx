import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { user, logInUser, googleLogin, setUser, logOutUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name);

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        // setName(name);
        setUser(user);
        const currUser = {
          email: user.email,
        };
        getJwtToken(currUser)
        navigate(from, { replace: true });

        // console.log(user);
      })
      .catch((e) => console.log(e));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const currUser = {
          email: user.email
        }


        getJwtToken(currUser)
      })
      .catch((e) => e);
  };

  const handleGithubLogin = () => {};

  const handleLogout = () => {
    logOutUser().then().catch();
  };

  const getJwtToken = (user) => {
    fetch("http://localhost:5000/userJWT", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // use http only cookie
        localStorage.setItem("user-token", data.token);
      });
  };

  return (
    <div>
      <div className="text-center mb-16">
        {user?.email}
        <h2>Log In TO Your Account</h2>
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

        {user?.email ? (
          <button
            onClick={handleLogout}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            logout
          </button>
        ) : (
          <>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Log In
          </button>
            <button onClick={handleGoogleLogin} className="btn btn-error">Goolge login</button>
            </>
        )}
      </form>
    </div>
  );
};

export default Login;
