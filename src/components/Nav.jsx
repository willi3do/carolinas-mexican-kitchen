import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky w-full shadow-lg z-50 bg-primary1 border-4 backdrop-blur-sm h-auto flex flex-col justify-between">
      <div className="flex md:flex-row justify-between items-center gap-3 w-full px-3 ">
        {/* Logo Container*/}
        <div className="shrink-0">
          <img
            className="rounded-1xl object-cover h-20 md:h-16 w-auto object-center"
            src={`${import.meta.env.BASE_URL}/Images/logoDoll.png`}
            alt="Carolina's Mex Kitchen hero image"
          />
        </div>
        {/* Title Link */}
        <Link
          to="/"
          className="text-4xl sm:text-6xl md:text-7xl text-center text-outline leading-tight font-cookie w-full md:w-auto"
        >
          Carolinas Mexican Kitchen
        </Link>
        <button
          className="flex flex-col cursor-pointer w-20 h-15 items-center justify-evenly "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="w-10 h-2 bg-black rounded"></span>
          <span className="w-10 h-2 bg-black rounded"></span>
          <span className="w-10 h-2 bg-black rounded"></span>
        </button>
      </div>
      {isOpen && (
        <div className=" bg-stone-500 flex flex-row justify-center items-center h-10 w-full border-black text-md p-5">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block px-6 py-3 text-gray-900 hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          {/* <Link
            to="/reservations"
            className="block px-6 py-3 text-gray-800 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Reservations
          </Link> */}
          <Link
            to="/about"
            className="block px-6 py-3 text-gray-800 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
