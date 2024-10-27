import React, { useState } from 'react';
import useCart from '../hooks/useCart';
import useWishlist from '../hooks/useWishlist';
import "./ProductCardsports.css"

const ProductCard = ({ product }) => {
  const data = product;
  const { addProductToCart } = useCart();
  const { wishlist, toggleProductWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  const handleSizeSelect = (size) => {
    console.log(`Selected size: ${size}`);
    // You can implement logic here for handling the selected size
  };

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    toggleProductWishlist(data.id);
    // onToggleWishlist(data.id);
  };

  const handleSeeAllClick = () => {
    setSeeAll(!seeAll);
  };
  return (
    <>
      {
        <div className="product-carda">
          <img src={data.thumbnail_url}
            alt={data.name}
            className="product-image"
          />
          <div
            className={`product-details-container ${seeAll ? "scrollable" : ""}`}
          >
            <div className="product-details">
              <h3 className="product-name">{data.name}</h3>
              {seeAll && (
                <div className="product-description-container">
                  <p className="product-description">{data.description}</p>
                </div>
              )}
              <button onClick={handleSeeAllClick} className="see-all-button">
                {seeAll ? "See Less" : "See All Description"}
              </button>
              <h4>Sport - {data.sports}</h4>
              <div className="pro1">
                {/* <p className="sizepara">Sizes :  <select id="quantitys" onChange={(e) => handleSizeSelect(e.target.value)}>
                  {data.sizes_available.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select> */}
                  <span className="rating">Rating: ⭐{data.rating}</span>
                {/* </p> */}
              </div>
              <br />
              <div className="buttonbox2">
                <div className="quantity-select">
                  <label htmlFor="quantity">Quantity:  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}>
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                  <span className="product-price">₹ {data.price}/-</span>
                </div>
              </div>
              <br />
              <div className="buttonbox">
                <div className="add-to-cart">
                  <button
                    className="add-to-cart-button"
                    onClick={() => addProductToCart({ ...product, quantity })}>
                    Add to Cart
                  </button>
                </div>
                <div className="wishlist">
                  <button className={`wishlist-button ${isWishlisted ? 'wishlisted' : ''}`} onClick={handleWishlistClick}>
                    {isWishlisted ? '❤️ Wishlisted' : '🤍 Wishlist'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  );

};

export default ProductCard;
// import React from 'react';
// import './ProductCard.css';

// const ProductCard = ({ product, onAddToCart }) => {
//   const data = product;

//   return (
//     <div className="product-card">
//       <div className="product-image-container">
//         <img src={data.thumbnail_url} alt={data.homedecor_name} className="product-image" />
//       </div>
//       <div className="product-details">
//         <h3 className="product-name">{data.homedecor_name}</h3>
//         <p className="product-description">{data.description}</p>
//         <div className="product-prices">
//           <span className="product-price">${data.price}</span>
//         </div>
//         <div className="add-to-cart">
//         <button className="add-to-cart-button" onClick={() => onAddToCart(data.id)}>
//           Add to Cart
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
