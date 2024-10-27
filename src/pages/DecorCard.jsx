import React, { useState } from "react";
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";
import "./DecorCard.css";
// import "./ProductCard.css";

const DecorCard = ({ product }) => {
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
        <div className="product-cardh">
          <img
            src={data.thumbnail_url}
            alt={data.homedecor_name}
            className="product-image"
          />
          <div
            className={`product-details-container ${
              seeAll ? "scrollable" : ""
            }`}
          >
            <div className="product-details">
              <h3 className="product-name">{data.homedecor_name}</h3>
              {seeAll && (
                <div className="product-description-container">
                  <p className="product-description">{data.description}</p>
                </div>
              )}
              <button onClick={handleSeeAllClick} className="see-all-button">
                {seeAll ? "See Less" : "See All Description"}
              </button>
              <div className="pro1">
                <span className="rating">Rating: ⭐{data.rating}</span>
              </div>
              <br />
              <div className="buttonbox2">
                <div className="quantity-select">
                  <label htmlFor="quantity">Quantity: </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
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
                    onClick={() => addProductToCart({ ...product, quantity })}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="wishlist">
                  <button
                    className={`wishlist-button ${
                      isWishlisted ? "wishlisted" : ""
                    }`}
                    onClick={handleWishlistClick}
                  >
                    {isWishlisted ? "❤️ Wishlisted" : "🤍 Wishlist"}
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

export default DecorCard;

