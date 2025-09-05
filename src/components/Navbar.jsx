import React, { useState, useEffect } from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import CountryDropdown from "./Country";
import Category from "./Category";
import { useCart } from "../context/CartContext";
import { getData } from "../context/DataContext";
import { FaHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartItem } = useCart();
  const { search, setSearch, wishlist } = getData();
  const { user, logout } = useAuth(); // auth
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = () => {
    navigate("/auth");
  };

  // Redirect to /products whenever search changes
  useEffect(() => {
    if (search.trim() !== "" && location.pathname !== "/products") {
      navigate("/products");
    }
  }, [search, navigate, location]);

  return (
    <div className="bg-slate-200/50 py-3 mb-10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo & Country */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logoImg} alt="logo" className="w-24 h-16 object-contain" />
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-gray-700">
            <CountryDropdown />
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            value={search}
            className="bg-white p-2 ml-4 rounded-md border-2 border-gray-400 w-48"
          />

          <Category />

          <ul className="flex gap-6 items-center text-lg font-semibold">
            <NavLink to="/"> <li>Home</li> </NavLink>
            <NavLink to="/products"> <li>Products</li> </NavLink>
            <NavLink to="/contact"> <li>Contact</li> </NavLink>
            <NavLink to="/about"> <li>About</li> </NavLink>
          </ul>

          <Link to="/cart" className="relative">
            <IoCartOutline className="h-6 w-6" />
            <span className="bg-rose-600 text-xs px-2 py-0.5 rounded-full absolute -top-2 -right-2 text-white">
              {cartItem.length}
            </span>
          </Link>

          <Link to="/wishlist" className="relative">
            <FaHeart className="h-6 w-6 text-red-500" />
            <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full absolute -top-2 -right-2 text-white">
              {wishlist.length}
            </span>
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-700">
                Hi, {user.firstName}
              </span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleNavigation}
              className="hover:scale-x-110 bg-orange-200 px-3 py-1 rounded hover:bg-orange-400 transition duration-600 font-semibold"
            >
              Sign In
            </button>
          )}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-4">
          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search..."
              value={search}
              className="bg-white p-2 rounded-md border-2 border-gray-400"
            />

            <Category />
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </NavLink>
            <div className="flex items-center justify-between">
              <Link to="/cart" className="relative">
                <IoCartOutline className="h-6 w-6" />
                <span className="bg-rose-600 text-xs px-2 py-0.5 rounded-full absolute -top-2 -right-2 text-white">
                  {cartItem.length}
                </span>
              </Link>

              <Link to="/wishlist" className="relative">
                <FaHeart className="h-6 w-6 text-red-500" />
                <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full absolute -top-2 -right-2 text-white">
                  {wishlist.length}
                </span>
              </Link>

              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleNavigation();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-orange-200 px-3 py-1 rounded hover:bg-orange-400 transition duration-300 font-semibold"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
