import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { About, Home, Jobs, Projects, SignIn, SignUp } from "../pages";
import Search from "./ui/Search";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <BrowserRouter>
      <header className="fixed bg-white h-14 w-full shadow-md  px-2 py-2 md:px-4">
        <div className="flex items-center justify-between">
          {/**<BeakerIcon className="h-6 w-6 text-blue-500" />*/}
          <div className="flex items-center md:gap-5 gap-2">
            <Link to="/" className="h-10 flex items-center ">
              {/* Logo */}
            </Link>
            {/* Navigation Links */}
            <nav className="hidden md:flex  flex-row items-center justify-start gap-20">
              <Link to="/jobs" className="text-black active:blue">
                Jobs
              </Link>
              <Link to="/projects" className="text-black ">
                Projects
              </Link>
              <Link to="/about" className="text-black ">
                About
              </Link>

              <div className="items-center justify-start overflow-hidden flex flex-row">
                {/* Search Input */}
                <Search />
              </div>
            </nav>
          </div>

          {/* Sign In and Sign Up */}
          <nav className="hidden md:flex items-center gap-8 ml-4 font-semibold px-5">
            <Link to="/signin" className="text-black bg- px-4 py-2">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-black text-white rounded-full h-25  gap-8 self-stretch rounded-64 flex flex-row py-[0.75rem] px-[1.5rem] items-center w-50"
            >
              Sign Up
            </Link>
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
      <div className="pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
