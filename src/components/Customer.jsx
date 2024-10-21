import React from "react";
import "./customer.css";
import c1 from "../imgs/cust-1.avif";
import c2 from "../imgs/cust-2.avif";
import c3 from "../imgs/cust-3.avif";

const Customer = () => {
  return (
    <section className="customer">
      <div className="conatiner">
        <div className="row">
          <div className="customer-heading">
            <h1>Customers </h1>
            <div className="customer-highlight">Love Us.</div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="customer-content">
              <img src={c1} alt="" />
              <p>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia."
              </p>
              <h5>- Charlotte Hale-</h5>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="customer-content">
              <img src={c2} alt="" />
              <p>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia."
              </p>
              <h5>- Charlotte Hale-</h5>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="customer-content">
              <img src={c3} alt="" />
              <p>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia."
              </p>
              <h5>- Charlotte Hale-</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
