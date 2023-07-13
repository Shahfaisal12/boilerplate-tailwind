import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
   <div className="bg-black">
   <div className="flex h-24 justify-between items-center max-w-[1240px]  px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] mb-0">
        RelymerGroup
      </h1>
      <ul className="hidden md:flex mb-0">
        <li className="p-3 text-xl">
          <Link to="/" className="no-underline text-white">
            Home
          </Link>
        </li>
        <li className="p-3 text-xl">
          {" "}
          <Link to="/" className="no-underline text-white">
            Company
          </Link>
        </li>
        <li className="p-3 text-xl">
          {" "}
          <Link to="/" className="no-underline text-white">
            Resources
          </Link>
        </li>
        <li className="p-3 text-xl">
          {" "}
          <Link to="/" className="no-underline text-white">
            About
          </Link>
        </li>
        <li className="p-3 text-xl">
          {" "}
          <Link to="/" className="no-underline text-white">
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? "" : <AiOutlineMenu size={20} />}
        <div
          className={
            !nav
              ? "fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          <div className="flex items-center justify-between">
            <h1 className="w-full text-xl font-bold text-[#00df9a] m-2">
              RelymerGroup
            </h1>
            <div onClick={handleNav} className="m-2">
              {!nav ? <AiOutlineClose size={20} /> : ""}
            </div>
          </div>

          <ul className="mb-0 p-0 pt-12 uppercase">
            <li className="p-3 border-b border-gray-600">
              {" "}
              <Link to="/" className="no-underline text-white">
                Home
              </Link>
            </li>
            <li className="p-3 border-b border-gray-600">
              {" "}
              <Link to="/" className="no-underline text-white">
                Company
              </Link>
            </li>
            <li className="p-3 border-b border-gray-600">
              {" "}
              <Link to="/" className="no-underline text-white">
                Resources
              </Link>
            </li>
            <li className="p-3 border-b border-gray-600">
              {" "}
              <Link to="/" className="no-underline text-white">
                About
              </Link>
            </li>
            <li className="p-3 border-b border-gray-600">
              {" "}
              <Link to="/" className="no-underline text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Header;
