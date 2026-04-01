import React from "react";

const Navbar = ({ carts }) => {
  return (
   <div className="navbar bg-base-200 shadow-sm px-4 sm:px-6 lg:px-20 py-3.5">
  <div className="navbar-start">
    <div className="dropdown hidden sm:block">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>

    {/* <!-- Logo (responsive size) --> */}
    <a className="btn btn-ghost text-xl sm:text-2xl lg:text-3xl text-blue-500 font-bold">
      DigiTools
    </a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-lg gap-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>

  <div className="navbar-end justify-center items-center">
    
    {/* <!-- Cart (hide on small) --> */}
    <div
      tabIndex={0}
      role="button"
      className="btn btn-ghost btn-circle mr-2.5 hidden sm:flex"
    >
      <div className="indicator">
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="bg-blue-500 text-white font-semibold badge badge-sm indicator-item">
          {carts.length}
        </span>
      </div>
    </div>

    {/* <!-- Login (always visible) --> */}
    <button className="btn btn-outline border-none mr-2.5 btn-sm sm:btn-md hover:bg-blue-500 hover:text-white hover:font-bold rounded-full">
      <a>Login</a>
    </button>

    {/* <!-- Get Started (hide on small) --> */}
    <button className="btn btn-primary rounded-full hidden sm:inline-flex hover:shadow-2xl hover:font-bold transition-shadow duration-300">
      <a>Get Started</a>
    </button>

  </div>
</div>
  );
};

export default Navbar;
