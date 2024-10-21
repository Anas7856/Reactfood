import React from "react";
import s1 from "../imgs/s-1.svg";
import s2 from "../imgs/s-2.svg";
import EastIcon from "@mui/icons-material/East";
import s3 from "../imgs/s-3.svg";
import "./services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="services-heading">
            <h1>Amazing </h1>
            <div className="services-highlight">Services</div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="services-content">
              <div className="services-circle">
                <img src={s1} alt="" />
              </div>
              <h3>230+ Locations</h3>
              <p>Lorem ipsum donor amet siti ceali placeholder text</p>
              <h6>
                Learn More <EastIcon />
              </h6>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="services-content">
              <div className="services-circle">
                <img src={s2} alt="" />
              </div>
              <h3>Professional Chefs</h3>
              <p>Lorem ipsum donor amet siti ceali placeholder text</p>
              <h6>
                Learn More <EastIcon />
              </h6>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="services-content">
              <div className="services-circle">
                <img src={s3} alt="" />
              </div>
              <h3>Birthday Catering</h3>
              <p>Lorem ipsum donor amet siti ceali placeholder text</p>
              <h6>
                Learn More <EastIcon />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
