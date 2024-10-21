import React from "react";
import "./hero.css";

import heropick from "../imgs/photo-1504674900247-0877df9cc836.avif";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="hero-content">
              <h1>Delicious & Affordable</h1>
              <div className="higlight">Meals Near You.</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="hero-button">
                <button>Order Now</button>
                <div className="hero-circle">
                  <div className="circle">
                    <PlayArrowOutlinedIcon className="iconplay" />
                  </div>
                  <h6>Meet The Chefs</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="hero-picture">
              <img src={heropick} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
