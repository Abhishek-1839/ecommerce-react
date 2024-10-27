import React from 'react';
import DecorCard from './DecorCard';
import INITIAL_DATA from '../DATA/homedecor.json';
import DecorCategories from './DecorCategories';
import { useSelector } from 'react-redux';
import img from "../DATA/banner.jpg"

const DecorList = () => {
  const category = useSelector((state) => state.categorys.category);
  const products = INITIAL_DATA;


  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || category === product.category;
    return matchesCategory;
  });

  return (
    <div className="shoes-container">
      <img style={{ width: "100%" }} src={img}></img>
      <h1 style={{ fontSize: "60px", fontWeight: "1000", fontFamily: "poppins", color: "black" }}>The Secret Ingredient is Love...</h1>
      <p style={{ fontWeight: "700" }}>HOME - A story of who we are and a collection of things we love, Let's make it beautiful with us.... </p>

      <div className="pagediv">
        <div className="left">
          <DecorCategories />
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <DecorCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DecorList;
