import React from "react";
import "./download.css";
import apppick from "../imgs/app-mockup.3cdce84cf7ea691ecca9.png";
import apple from "../imgs/apple.png";
import playstore from "../imgs/playstore.png";

const Download = () => {
  return (
    <section className="download">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="download-content">
              <h5>Download App</h5>
              <h1>
                People around you are ordering delicious
                <div className="download-heading">
                  <h1>meals using the </h1>
                  <div className="download-highlight">Treact App.</div>
                </div>
              </h1>
              <div className="install-box">
                <div className="playstore-download">
                  <img src={apple} alt="" className="apple" />
                  <h4>APP STORE</h4>
                </div>
                <div className="playstore-download">
                  <img src={playstore} alt="" />
                  <h4>PLAY STORE</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="download-pick">
              <img src={apppick} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
