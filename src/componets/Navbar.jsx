import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import Home from "../pages/Home";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36 cursor-pointer" alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
        />
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
          <p className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            5
          </p>
        </Link>
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="Profile Icon"
          />
          <div className="absolute right-0 hidden group-hover:block bg-slate-100 shadow-lg rounded-lg mt-2">
            <div className="flex flex-col gap-2 w-36 py-3 px-5">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log Out</p>
            </div>
          </div>
        </div>
        <img
          onClick={toggleSidebar}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 left-0 h-full overflow-hidden bg-white transition-all duration-300 ease-in-out ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="Back Icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="p-2 pl-6 border"
            to="/"
          >
            Home{" "}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="p-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="p-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="p-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
