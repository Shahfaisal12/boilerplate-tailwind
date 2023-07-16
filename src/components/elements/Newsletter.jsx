import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-black py-20 px-5 border-b">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <h1 className="font-bold text-white md:text-4xl sm:text-2xl text-xl">
          want trip & tricks to optimize your flow?
        </h1>
        <p className="text-gray-100">
          sign up to our newsletter and stay up to date.
        </p>
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <input type="email" placeholder="Enter Your Email" className="w-full p-3 rounded-md text-black outline-none" />
          <button className="py-3 px-5 w-56 rounded-md font-bold bg-[#00df9a]">
            Notify me
          </button>
        </div>

        <p className="text-white pt-5">
          We care bout production of your date. Read our <br />
          <span className="text-[#00df9a]"> Privacy Policy</span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Newsletter;
