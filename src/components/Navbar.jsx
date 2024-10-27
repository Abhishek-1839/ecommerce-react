import { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import bag from "../assets/bag.png";
import logo from "../assets/images__1_-removebg-preview (1).png";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Nav">
      <div className="logo">
        <img className="logo-img" src={logo} alt="Logo" />
      </div>
      <div className="hamburger" onClick={handleMenuToggle}>
        &#9776;
      </div>
      <div className={`Nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link className="Navlink" to="/">
          Home
        </Link>
        <div className="Navlink1" onClick={handleDropdownToggle} ref={dropdownRef}>
          Product
          {isDropdownOpen && (
            <div className="dropdown">
              <Link className="dropdown-link" to="/Men">Men</Link>
              <Link className="dropdown-link" to="/product/category2">Women</Link>
              <Link className="dropdown-link" to="/Phones">Gadgets</Link>
                <Link className="dropdown-link" to="/HomeDecor">Home Decor and Kitchen</Link>
                <Link className="dropdown-link" to="/Sports">Sports Goods</Link>
                <Link className="dropdown-link" to="/FOOTWEAR">Footwears</Link>
            </div>
          )}
        </div>
        <Link className="Navlink" to="/order">
          Orders
        </Link>
        <Link className="Navlink" to="/Store">
          Store
        </Link>
        <Link className="Navlink" to="/Profile">
          Profile
        </Link>
        <div className="icons-part">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          
          <Link to='/wishlist'><i className="fa-regular fa-heart fa-xl"></i></Link>
          <Link className="Navlink" to="/cart">
            <img className="bag" src={bag} alt="Cart" />
          </Link>
          <span className="cartCount">{items.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
