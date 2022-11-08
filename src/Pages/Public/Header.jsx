import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    const menuItem = (
        <>
          <li className="font-semibold ">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold ">
            <Link to="/login">login</Link>
          </li>
          <li className="font-semibold ">
            <Link to="/register">Register</Link>
          </li>
{/*     
          {user?.uid ? (
            <li className="font-semibold">
              <Link to="/">My Reviews</Link>
            </li>
            <li className="font-semibold">
              <Link to="/">Add A Service</Link>
            </li>
            <li className="font-semibold">
              <Link to="/">My Reviews</Link>
            </li>
          ) : (
            <li className="font-semibold">
              
            </li>
          )} */}
        </>
      );
    return (
        <div className="navbar h-20 border">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img src='' alt="" />
          </Link>
        </div>
    
        <div className="navbar-end">
          {/* {user && user.uid ? (
            <button
              onClick=''
              className="btn btn-outline btn-accent "
            >
              Log Out
            </button>
          ) : ( */}
              <ul className="menu menu-horizontal p-0">{menuItem}</ul>
          {/* )} */}
        </div>
      </div>
    );
};

export default Header;