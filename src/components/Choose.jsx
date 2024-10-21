import React from "react";
import "./choose.css";
import choosepick from "../imgs/choose.avif";

const Choose = () => {
  return (
    <section className="choose">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="choose-content">
              <h5>A Reputed Brand</h5>
              <div className="choose-heading">
                <h1>Why </h1>
                <div className="choose-highlight">Choose Us ?</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="choose-orders">
                <div className="choose-order-complete">
                  <h2>94000+</h2>
                  <h6>Orders</h6>
                </div>
                <div className="choose-order-complete">
                  <h2>11000+</h2>
                  <h6>Customers</h6>
                </div>
                <div className="choose-order-complete">
                  <h2>1500+</h2>
                  <h6>Chefs</h6>
                </div>
              </div>
              <button>Order Now</button>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="choose-picture">
              <img src={choosepick} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
