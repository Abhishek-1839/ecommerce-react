import React from 'react';
import ProductCard from './ProductCard';
import INITIAL_DATA from '../DATA/footwear.json';
import Categories from './Categories';
import Genders from './Gender';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const category = useSelector((state) => state.categorys.category);
  const gender = useSelector((state) => state.gender.category);
  const products = INITIAL_DATA;


  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || category === product.category;
    const matchesGender = gender === "All" || gender === product.gender;
    return matchesCategory && matchesGender;
  });

  return (
    <div className="shoes-container">
      <img style={{ width: "100%" }} src={"https://img.freepik.com/premium-photo/several-people-s-hands-showcasing-different-colors-styles-summer-shoes-isolated-light-grey-background-with-copy-space-outlet-marketing-poster-seasonal-footwear-promotion_1070352-501.jpg?w=1380"}></img>
      <h1 style={{ fontSize: "60px", fontWeight: "1000", fontFamily: "poppins", color: "black" }}>UNLEASH YOUR POTENTIAL.</h1>
      <p style={{ fontWeight: "700" }}>Step Up Your Style Game. </p>

      <div className="pagediv">
        <div className="left">
          <Categories />
          <Genders />
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
