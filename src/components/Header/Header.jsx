import "./header.css";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import Profile from "./Profile";

const Header = () => {
  const [nav, setNav] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    stickyHeaderFunction();

    return () => window.removeEventListener("scroll", stickyHeaderFunction);
  });

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mx-auto w-full bg-blue-200" ref={headerRef}>
      <nav className="w-full h-[80px] mx-auto flex justify-between items-center py-4 px-2 max-w-[1340px] ">
        {/* Left Side */}
        <div className="flex items-center justify-between w-full md:w-auto px-4">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl">
            Soko<span className="font-bold">Mart</span>
          </h1>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden"
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex">
          <ul className="flex space-x-10 items-center">
            <li className="text-gray-600 font-[500] cursor-pointer active:font-[700]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-600 font-[500] cursor-pointer active:font-[700]">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="text-gray-600 font-[500] cursor-pointer active:font-[700]">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Cart Button */}
        <div className="nav__icons">
          <span className="fav__icon">
            <AiOutlineHeart size={22} />
            <span className="badge">1</span>
          </span>
          <span className="cart__icon" onClick={navigateToCart}>
            <FiShoppingBag size={22} />
            <span className="badge">{totalQuantity}</span>
          </span>
          <div className="profilee">
            <Profile currentUser={currentUser} logout={logout} />
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300 ease-in "></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={`fixed top-0  w-[60%] h-screen bg-white z-10 duration-500 ease-in ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="top-4 right-4 absolute cursor-pointer
  "
          />
          <div className="md:hidden flex p-4 items-center gap-6 mt-2 ">
            <span className="fav__icon">
              <AiOutlineHeart size={22} />
              <span className="badge">1</span>
            </span>
            <span className="cart__icon" onClick={navigateToCart}>
              <FiShoppingBag size={22} />
              <span className="badge">2</span>
            </span>
          </div>
          <nav className="mt-8">
            <ul className="flex flex-col p-4 text-gray-900 font-[600] text-center gap-8">
              <li className="text-gray-800 hover:bg-blue-300 hover:text-white font-[500] cursor-pointer active:font-[700]">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-800 hover:bg-blue-300 hover:text-white  font-[500] cursor-pointer active:font-[700]">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="text-gray-800 hover:bg-blue-300 hover:text-white  font-[500] cursor-pointer active:font-[700]">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;
