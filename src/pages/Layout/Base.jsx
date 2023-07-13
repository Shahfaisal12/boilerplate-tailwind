import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Base = (props) => {
  return (
    <div className="flex justify-between flex-col min-h-screen">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Base;
