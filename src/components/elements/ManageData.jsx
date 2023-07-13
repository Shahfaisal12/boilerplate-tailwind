import React from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const ManageData = () => {
  return (
    <div className="ManageData-section py-5">
      <div className="flex max-w-[1240px] w-full m-auto items-center grid lg:grid-cols-2 gap-5 px-4 py-5 ">
        <img src="assets/analytics.jpg" className="rounded" alt="" />

        <div className="flex flex-col">
          <h6 className="text-xl font-bold uppercase text-[#00df9a] p-1">
             data Analytics Dashboard
          </h6>
          <h1 className="text-black md:text-3xl sm:text-2xl text-xl font-bold md:py-1">
          Manage Data Analttics Centrally
          </h1>
          <h6 className="text-xl text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ea accusantium vitae? Distinctio quos dolore ducimus nostrum ab aperiam assumenda sed, nam, eum qui ut. Labore aut ipsam minima repellat.
          </h6>
          <Link
        to="/"
        className="fw-bold text-center font-medium bg-black p-3 mt-4 w-[200px] m-auto no-underline text-green-500 rounded"
      >
        Get Started
      </Link>
        </div>
      </div>
      <div className="flex mt-5 max-w-[1240px] w-full m-auto items-center grid lg:grid-cols-2 gap-5 px-4 py-5 ">
        <div className="flex flex-col">
          <h6 className="text-xl font-bold uppercase text-[#00df9a] p-1">
             data Analytics Dashboard
          </h6>
          <h1 className="text-black md:text-3xl sm:text-2xl text-xl font-bold md:py-1">
          Manage Data Analttics Centrally
          </h1>
          <h6 className="text-xl text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ea accusantium vitae? Distinctio quos dolore ducimus nostrum ab aperiam assumenda sed, nam, eum qui ut. Labore aut ipsam minima repellat.
          </h6>
          <Link
        to="/"
        className="fw-bold text-center font-medium bg-black p-3 mt-4 w-[200px] m-auto no-underline text-green-500 rounded"
      >
        Get Started
      </Link>
        </div>
        <img src="assets/analytics.jpg" className="rounded" alt="" />

      </div>
    </div>
  );
};

export default ManageData;
