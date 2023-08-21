import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Search from "./ui/Search";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className=" z-[100] fixed bg-white h-auto w-full shadow-md  px-2 py-2 md:px-4">
      <div className="flex items-center justify-between ">
        {/**<BeakerIcon className="h-6 w-6 text-blue-500" />*/}
        <div className="flex items-center md:gap-5 gap-2">
          <Link to="/" className="h-10 flex items-center ">
            Logo
          </Link>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center md:gap-10 font-semibold">
            <Link to="/jobs" className="text-black hover:underline">
              Jobs
            </Link>
            <Link to="/projects" className="text-black hover:underline">
              Projects
            </Link>
            <Link to="/about" className="text-black hover:underline">
              About
            </Link>
          </nav>
          {/* Search Input */}
          <Search />
        </div>

        {/* Sign In and Sign Up */}
        <nav className="hidden md:flex items-center gap-8 ml-4 font-semibold px-5">
          <NavLink to="/signin" className="text-black rounded-full px-4 py-2">
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="text-black rounded-full h-25  gap-8 self-stretch rounded-64 flex flex-row py-[0.75rem] px-[1.5rem] items-center w-50"
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden absolute top-4 right-1">
        <FiMenu
          className="text-black cursor-pointer text-xl"
          onClick={handleMenuToggle}
        />
      </div>
      {showMenu && (
        <div className="md:hidden bg-white font-semibold text-right mt-4">
          <Link to="/jobs" className="block text-black mt-2 ">
            Jobs
          </Link>
          <Link to="/projects" className="block text-black mt-2 ">
            Projects
          </Link>
          <Link to="/about" className="block text-black mt-2 ">
            About
          </Link>
          <Link to="/signin" className="block text-black mt-2 ">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="block bg-black text-white rounded-md h-25  gap-8 self-stretch rounded-64  flex-row py-[0.75rem] px-[1.5rem] items-center w-50"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
