import React from 'react';
import ProductCardsports from './ProductCardsports';
import INITIAL_DATA from '../DATA/sportsgoods.json';
import Categories from './Categoriessports';
// import Genders from './Gender';
import Sports from './Sports';
import imgs from '../DATA/sportgood.jpg'
import { useSelector } from 'react-redux';

const ProductList = () => {
  const category = useSelector((state) => state.categorys.category);
  const sport = useSelector((state) => state.gender.category);
  const products = INITIAL_DATA;


  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || category === product.category;
    const matchesGender = sport === "All" || sport === product.sports;
    return matchesCategory && matchesGender;
  });

  return (
    <div className="shoes-container">
      <img style={{ width: "100%" }} src={imgs}></img>
      <h1 style={{ fontSize: "60px", fontWeight: "1000", fontFamily: "poppins", color: "black" }}>Get Active, Get Equipped.</h1>
      <p style={{ fontWeight: "700" }}>Shop our extensive selection of sports goods and get ready to conquer your next challenge.</p>
      <div className="pagediv">
        <div className="left">
          <Categories />
          <Sports />
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCardsports key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
