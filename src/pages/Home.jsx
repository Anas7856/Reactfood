import React from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/About";
import Menu from "../components/Menu";
import Services from "../components/Services";
import Choose from "../components/Choose";
import Hero from "../components/Hero";
import Customer from "../components/Customer";
import Download from "../components/Download";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
      <Choose />
      <Customer />
      <Download />
    </div>
  );
};

export default Home;
