import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="btns-div">
        <button className="btn1">Shop Now</button>
      </div>

      <img
        style={{ width: "100%" }}
        src={
          "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1719,c_limit/86843471-66d8-4437-a777-15aa1e48def1/nike-just-do-it.jpg"
        }
      ></img>
    </div>
  );
};

export default Banner;
