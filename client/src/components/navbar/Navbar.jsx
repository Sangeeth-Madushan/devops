

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assests/images/iLogo.jpeg";
import Button from "../Button";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";

const Navbar = () => {
  const email = sessionStorage.uEmail;
  const isLogged = Cookies.get("isLogin") === "true";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      sessionStorage.removeItem("uEmail");
      Cookies.set("isLogin", "false");
      window.location.href = "/";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 w-full p-2 bg-red-800 h-[96px] shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="text-2xl font-semibold text-white">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[85px] w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="block text-3xl text-black focus:outline-none hover:text-teal-500"
          >
            &#8801;
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[90px] left-0 right-0 bg-slate-50 lg:hidden shadow-lg">
            <Link
              to="/"
              className="block p-4 font-bold text-yellow-500 hover:bg-teal-100 hover:text-teal-600"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="block p-4 font-bold text-black hover:bg-teal-100 hover:text-teal-600"
            >
              Products
            </Link>
            {isLogged && (
              <Link
                to="/account"
                className="block p-4 font-bold text-black hover:bg-teal-100 hover:text-teal-600"
              >
                My Account
              </Link>
            )}
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden space-x-4 lg:flex">
          <Link
            to="/"
            className="p-4 font-bold text-black hover:scale-105 hover:text-teal-600"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="p-4 font-bold text-black hover:scale-105 hover:text-teal-600"
          >
            Products
          </Link>
          {isLogged && (
            <Link
              to="/account"
              className="p-4 font-bold text-black hover:scale-105 hover:text-teal-600"
            >
              My Account
            </Link>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {email ? (
            <>
              <Button
                as={NavLink}
                to="/sign-up"
                className={twMerge(
                  "!bg-teal-600 border-teal-400 border-2 border-solid px-4 py-2 lg:px-6 lg:py-3 hover:scale-105"
                )}
              >
                <span
                  className={twMerge(
                    "!text-green-200 text-sm font-bold uppercase tracking-wider"
                  )}
                >
                  Sign Up
                </span>
              </Button>
              <Button
                as={NavLink}
                onClick={handleLogout}
                className={twMerge(
                  "!bg-teal-600 border-teal-400 border-2 border-solid px-4 py-2 lg:px-6 lg:py-3 hover:scale-105"
                )}
              >
                <span
                  className={twMerge(
                    "!text-green-200 text-sm font-bold uppercase tracking-wider"
                  )}
                >
                  Log Out
                </span>
              </Button>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="text-lg font-bold text-teal-600 hover:scale-105 hover:text-teal-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;