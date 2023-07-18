import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="w-3/4 mx-auto">
        <p className="text-4xl font-bold mb-3 text-center">404</p>
        <p className="text-xl font-bold mb-3 text-center">
          Sorry! Page Not Found
        </p>
        <p className="italic mb-3 text-center">
          Sorry this content has been moved Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Earum, amet perferendis, nemo facere
          excepturi quis.
        </p>
        <div className="flex justify-center">
          <Link to="/" className="text-decoration-none text-black">
            <button
              type="button"
              className="btn btn-outline-primary btn-search"
            >
              GO TO HOME PAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
