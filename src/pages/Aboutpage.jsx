import React from "react";
import About from "../components/About";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Aboutpage;
