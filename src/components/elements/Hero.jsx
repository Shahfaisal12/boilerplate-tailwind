import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className=" bg-black py-5">
      <div className="max-w-[800px] m-auto w-full text-center flex flex-col">
        <h5 className="text-xl font-bold uppercase text-[#00df9a] p-2">
          Growing with data Analytics
        </h5>
        <h1 className="text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
          Grow with data.
        </h1>
        <div className="flex gap-2 items-center justify-center">
          <h6 className="md:text-5xl sm:text-4xl font-bold text-white">
            Fast, flaxible financing for
          </h6>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typingSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#c1c1c1cb]">
          Growing with data analytics to incre ase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <Link
          to="/"
          className="fw-bold font-medium bg-green-500 mt-4 p-3 w-[200px] m-auto no-underline text-black rounded"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
