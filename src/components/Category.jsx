import React from "react";
import "./category.css";
import men from "../assets/men.png";
import women from "../assets/WOMEN.png";
import home from "../assets/HOME.png";
import watch from "../assets/WATCH.png";
import tshirt from "../assets/tshirt.webp";
import jeans from "../assets/jeans.webp";
import shoes from "../assets/footwear.webp";

const Category = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <img src={tshirt}></img>
          {/* <img src={trouser} ></img> */}
          <img src={jeans}></img>
          <img src={shoes}></img>
          <img src={home}></img>
          <img src={watch}></img>
        </div>
      </div>
    </>
  );
};

export default Category;
