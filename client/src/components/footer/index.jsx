
import React from "react";
import logo from "../../assests/images/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gradient-to-r from-teal-900 via-teal-700 to-teal-600">
      <div className="container w-screen mx-auto text-center">
        <div className="flex flex-col items-center justify-center w-full px-6 md:flex-row md:justify-between">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="logo" className="w-32 mb-3" />
            <p className="text-sm text-center text-gray-400 md:text-left">
              Your one-stop shop for the latest smartphones and accessories. 
              <br /> Trusted quality, best prices, and excellent service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col mt-4 md:mt-0">
            <h3 className="text-lg font-semibold text-blue-300">Quick Links</h3>
            <Link to="/aboutus" className="text-gray-400 hover:text-white">About Us</Link>
            <Link to="/products" className="text-gray-400 hover:text-white">Products</Link>
            <Link to="/warranty" className="text-gray-400 hover:text-white">Warranty & Support</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col mt-4 md:mt-0">
            <h3 className="text-lg font-semibold text-blue-300">Contact</h3>
            <p className="text-gray-400">📍 123 Mobile Street, City, Country</p>
            <p className="text-gray-400">📞 +94 71 234 5678</p>
            <p className="text-gray-400">📧 support@mobileshop.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <br />
        <hr className="border-gray-700" />
        <br />
        <p className="text-gray-500">&copy; {new Date().getFullYear()} MobileShop</p>
        <p className="text-gray-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
