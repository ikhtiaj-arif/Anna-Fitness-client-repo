import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import AddProgram from "../Pages/Private/AddProgram";
import ReviewUpAdd from "../Pages/Private/ReviewUpAdd";
import UpdateFormRev from "../Pages/Private/UpdateFormRev";
import UserReviews from "../Pages/Private/UserReviews";
import Blogs from "../Pages/Public/Blogs";
import Home from "../Pages/Public/Home";
import ProgramDetails from "../Pages/Public/HomeComponents/Details/ProgramDetails";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";
import Private from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: ()=> fetch('https://annas-fitness-server.vercel.app/blogs')
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/program/:id",
        element: <ProgramDetails></ProgramDetails>,
        loader: ({ params }) =>
          fetch(`https://annas-fitness-server.vercel.app/program/${params.id}`),
      },
      {
        path: "/reviews/:id",
        element: (
          <Private>
            <ReviewUpAdd></ReviewUpAdd>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`https://annas-fitness-server.vercel.app/program/${params.id}`),
      },
      {
        path: "/userReview",
        element: (
          <Private>
            <UserReviews></UserReviews>
          </Private>
        ),
      },
      {
        path: "/updateForm/:id",
        element: (
          <Private>
            <UpdateFormRev></UpdateFormRev>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`https://annas-fitness-server.vercel.app/review/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("user-token")}`,
            },
          }),
      },
      {
        path: "/addProgram",
        element: (
          <Private>
            <AddProgram></AddProgram>
          </Private>
        ),
      },
    ],
  },
]);

export default router;
