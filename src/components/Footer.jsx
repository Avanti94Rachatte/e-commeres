import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function FooterPage() {
  // State to track which sections are open on small screens
  // Could be an object or individual booleans, here I use object keyed by section name
  const [openSections, setOpenSections] = useState({
    usefulLinks: false,
    customerService: false,
    myAccount: false,
  });

  // Toggle function
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-slate-800 text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-around gap-8">
          {/* Logo and Contact */}
          <div className="flex flex-col items-center md:items-start md:w-1/4">
            <img src={logo} alt="Logo" className="h-24 rounded-md mb-4" />
            <div className="flex items-center space-x-4 text-center md:text-left">
              <div>
                <h3 className="font-thin text-sm sm:text-base">
                  Got Question? Call us 24/7
                </h3>
                <h2 className="font-medium text-xl">+0123 456 789</h2>
              </div>
              <FaPhone className="text-4xl" />
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:w-1/6 text-center md:text-left">
            <h2
              className="text-xl font-bold mb-2 cursor-pointer select-none flex justify-between items-center md:cursor-default"
              onClick={() => toggleSection("usefulLinks")}
            >
              Useful Links
              {/* Icon to indicate toggle */}
              <span className="md:hidden">{openSections.usefulLinks ? "▲" : "▼"}</span>
            </h2>
            {/* On md and up: always show, on smaller screens: toggle */}
            <ul
              className={`space-y-1 overflow-hidden transition-all duration-300 ${
                openSections.usefulLinks ? "max-h-96" : "max-h-0"
              } md:max-h-full md:block`}
            >
              <li className="hover:text-gray-300 cursor-pointer">About My Shop</li>
              <li className="hover:text-gray-300 cursor-pointer">Our Services</li>
              <li className="hover:text-gray-300 cursor-pointer">How to shop on My Shop</li>
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact us</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="md:w-1/6 text-center md:text-left">
            <h2
              className="text-xl font-bold mb-2 cursor-pointer select-none flex justify-between items-center md:cursor-default"
              onClick={() => toggleSection("customerService")}
            >
              Customer Service
              <span className="md:hidden">
                {openSections.customerService ? "▲" : "▼"}
              </span>
            </h2>
            <ul
              className={`space-y-1 overflow-hidden transition-all duration-300 ${
                openSections.customerService ? "max-h-96" : "max-h-0"
              } md:max-h-full md:block`}
            >
              <li className="hover:text-gray-300 cursor-pointer">Payment Methods</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Money-back guarantee!
              </li>
              <li className="hover:text-gray-300 cursor-pointer">Returns</li>
              <li className="hover:text-gray-300 cursor-pointer">Shipping</li>
              <li className="hover:text-gray-300 cursor-pointer">Terms and conditions</li>
              <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* My Account */}
          <div className="md:w-1/6 text-center md:text-left">
            <h2
              className="text-xl font-bold mb-2 cursor-pointer select-none flex justify-between items-center md:cursor-default"
              onClick={() => toggleSection("myAccount")}
            >
              My Account
              <span className="md:hidden">{openSections.myAccount ? "▲" : "▼"}</span>
            </h2>
            <ul
              className={`space-y-1 overflow-hidden transition-all duration-300 ${
                openSections.myAccount ? "max-h-96" : "max-h-0"
              } md:max-h-full md:block`}
            >
              <li className="hover:text-gray-300 cursor-pointer">Sign in</li>
              <li className="hover:text-gray-300 cursor-pointer">View Cart</li>
              <li className="hover:text-gray-300 cursor-pointer">My Wishlist</li>
              <li className="hover:text-gray-300 cursor-pointer">Track My Order</li>
              <li className="hover:text-gray-300 cursor-pointer">Help</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-0">
          <p className="text-sm sm:text-base mb-3 sm:mb-0">
            © My Shop. All Rights Reserved.
          </p>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-blue-600"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="YouTube"
                className="text-white hover:text-red-600"
              >
                <FaYoutube className="text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-blue-500"
              >
                <FaTwitter className="text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-blue-700"
              >
                <FaFacebook className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
