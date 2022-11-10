import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/logo.png'

const Header = () => {
const {user, logOutUser} = useContext(AuthContext);

const handleLogout =()=>{
  logOutUser()
  .then()
  .catch()
}

    const menuItem = (
        <>
          <li className="font-semibold ">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold ">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="font-semibold ">
            <Link to="/register">Register</Link>
          </li>
    
          { user && user.uid ? 
          <>
          
            <li className="font-semibold">
              <Link to="/addProgram">Add A Program</Link>
            </li>
            <li className="font-semibold">
              <Link to="/userReview">My Reviews</Link>
            </li></>
            
          : 
            <li className="font-semibold">
              
            </li>
          
          }
        </>
      );
    return (
        <div className="navbar h-20 bg-ring-offset-{success}">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64"
            >
              {menuItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" className="h-12" />
           <h1 className='ml-2 font-bold'> Anna Willer</h1>
          </Link>
        </div>
    
        <div className="navbar-end">

        <ul className="menu menu-horizontal p-0 hidden lg:flex">{menuItem}</ul>
          {user && user.uid ? (
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error "
            >
              Log Out
            </button>
          ) : (
            <Link to='/login'>
            <button
            className="btn btn-outline btn-info "
          >
           login
          </button>
          </Link>
            )
          }
          
        </div>
      </div>
    );
};

export default Header;