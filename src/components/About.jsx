import React from "react";
import aboutimg from "../imgs/photo-1460306855393-0410f61241c7.avif";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="about-pick">
              <img src={aboutimg} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="about-content">
              <h6>Established Since 2014</h6>
              <h1>We've been serving</h1>
              <div className="about-highlight d-flex mt-2">
                <h1 className="mt-2">for</h1>
                <div className="highlighted ">over 5 years.</div>
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua .{" "}
                <br />
                <br /> Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button>Latest Offers</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
