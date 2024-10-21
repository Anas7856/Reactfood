import React from "react";
import "./menu.css";
import menu1 from "../imgs/menu1.avif";
import menu2 from "../imgs/menu2.avif";
import menu3 from "../imgs/menu3.avif";
import menu4 from "../imgs/menu4.avif";
import menu5 from "../imgs/menu5.avif";
import menu6 from "../imgs/menu6.avif";
import menu7 from "../imgs/menu7.avif";
import menu8 from "../imgs/menu8.avif";

import StarIcon from "@mui/icons-material/Star";

const Menu = () => {
  return (
    <section className="menu">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="menu-heading">
              <h1>Checkout our</h1>
              <div className="menu-highlight">Menu</div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="menu-heading2">
              <div className="menu-cata">
                <button className="active">Starter</button>
                <button>Main</button>
                <button>Soup</button>
                <button>Deserts</button>
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner p-4">
          <div className="row p-2">
            <div className="col-12 col-md-12 col-lg-3 ">
              <div className="menu-content">
                <img src={menu1} alt="" />
                <h5>Veg Mixer</h5>
                <p>Tomato Salad & Carrot</p>
                <h3>$5.99</h3>
                <div className="rating">
                  <StarIcon className="menu-star" />
                  <h2>5.0</h2>
                  <h1>(87)</h1>
                </div>
                <div className="overlay">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <div className="menu-content">
                <img src={menu2} alt="" />
                <h5>Macroni</h5>
                <p>Cheese Pizza</p>
                <h3>$2.99</h3>
                <div className="rating">
                  <StarIcon className="menu-star" />
                  <h2>4.4</h2>
                  <h1>(37)</h1>
                </div>
                <div className="overlay">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <div className="menu-content">
                <img src={menu3} alt="" />
                <h5>Nelli</h5>
                <p>Tomato Salad & Carrot</p>
                <h3>$4.59</h3>
                <div className="rating">
                  <StarIcon className="menu-star" />
                  <h2>4.9</h2>
                  <h1>(89)</h1>
                </div>
                <div className="overlay">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <div className="menu-content">
                <img src={menu4} alt="" />
                <h5>Veg Mixer</h5>
                <p>Tomato Salad & Carrot</p>
                <h3>$9.09</h3>
                <div className="rating">
                  <StarIcon className="menu-star" />
                  <h2>5.0</h2>
                  <h1>(87)</h1>
                </div>
                <div className="overlay">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <div className="menu-content">
                <img src={menu3} alt="" />
                <h5>Veg Mixer</h5>
                <p>Tomato Salad & Carrot</p>
                <h3>$9.09</h3>
                <div className="rating">
                  <StarIcon className="menu-star" />
                  <h2>5.0</h2>
                  <h1>(87)</h1>
                </div>
                <div className="overlay">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <div className="menu-content">
                <img src={menu6} alt="" />
                <h5>Veg Mixer</h5>
                <p>Tomato Salad & Carrot</p>
                <h3>$9.09</h3>
                <div className="rating">
                  <StarIcon className="menu-star" />
                  <h2>5.0</h2>
                  <h1>(87)</h1>
                </div>
                <div className="overlay">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <div className="menu-content">
                <img src={menu7} alt="" />
                <h5>Veg Mixer</h5>
                <p>Tomato Salad & Carrot</p>
                <h3>$9.09</h3>
                <div className="rating">
                  <StarIcon className="menu-star" />
                  <h2>5.0</h2>
                  <h1>(87)</h1>
                </div>
                <div className="overlay">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <div className="menu-content">
                <img src={menu4} alt="" />
                <h5>Veg Mixer</h5>
                <p>Tomato Salad & Carrot</p>
                <h3>$9.09</h3>
                <div className="rating">
                  <StarIcon className="menu-star" />
                  <h2>5.0</h2>
                  <h1>(87)</h1>
                </div>
                <div className="overlay">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
