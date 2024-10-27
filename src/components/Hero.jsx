import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import heroImage from "../assets/bg.jpg";
import category1 from "../assets/pexels-atahandemir-3585797.jpg";
import category2 from "../assets/pexels-wendelmoretti-1972115.jpg";

import category5 from "../assets/pexels-adrienne-andersen-1174503-2661256.jpg";

import category10 from "../assets/Galaxy_Book3_Ultra_Image_07_HI.jpeg.webp";
import category11 from "../assets/hero-image.fill.size_1248x702.v1645211431.jpg";

import image111 from "../assets/57b628c688021950aac02b0eae07b9bdb81de7f5-1536x1536.webp";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <div className="hero-div">
          <div className="img-div">
          <img src={heroImage}></img>
            {/* <img src={image111}></img> */}
          </div>
          <div className="video-div">
            <video loop muted autoPlay>
              <source
                src="https://cdn.sanity.io/files/qa41whrn/prod/4a3026279df3bdb8eac79fcd2d37c6df1a4313e1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="categoriesSection">
        <h2>
          <span>S</span>hop by Category
        </h2>
        <div className="categories">
          <Link to="/category/1" className="categoryCard">
            <img src={category1} alt="Category 1" />
            <div className="categoryText">Gadgets</div>
          </Link>
          <Link to="/category/2" className="categoryCard">
            <img src={category2} alt="Category 2" />
            <div className="categoryText">Shoes</div>
          </Link>

          <Link to="/category/4" className="categoryCard">
            <img src={category5} alt="Category 4" />
            <div className="categoryText">Skincare</div>
          </Link>
          <Link to="/category/4" className="categoryCard">
            <img src={category10} alt="Category 4" />
            <div className="categoryText">Laptops</div>
          </Link>
          <Link to="/category/4" className="categoryCard">
            <img src={category11} alt="Category 4" />
            <div className="categoryText">Mobiles</div>
          </Link>
        </div>
      </div>
      {/* <img style={{height:"500px" ,width:"100%"}} src={heroBanner}></img> */}
      <div className="featuredProductsSection">
        <h2>
          <span>F</span>eatured Products
        </h2>
        <div className="products">
          {/* Replace with dynamic product components */}
          <div className="productCard">
            {" "}
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_summer_wear_tshirt_jersey_hp_mh_d_bef61be420.jpg"
              }
              alt="Category 4"
            />
          </div>
          <div className="productCard">
            {" "}
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_summer_bottoms_jersey_hp_card_d_dfdc698999.jpg"
              }
              alt="Category 4"
            />
          </div>
          <div className="productCard">
            {" "}
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_summer_sandal_and_flip_flop_hp_card_d_88833c10ed.jpg"
              }
              alt="Category 4"
            />
          </div>
          <div className="productCard">
            {" "}
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/em_in_all_summer_wear_hp_card_d_5d101ccd33.jpg"
              }
              alt="Category 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
