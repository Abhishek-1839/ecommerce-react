// Payment.js
import React, { useState } from 'react';
import './payment.css';
import { FaGooglePay, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';
import { SiPhonepe, SiPaytm } from 'react-icons/si';
import banner from '../assets/cts-corporate-banner-1366-360.jpg'
import { Link } from 'react-router-dom';

const Payment = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
        setTimeout(() => {
            alert('Order placed successfully!');
            setOrderPlaced(false);
            <Link to={"/home"}></Link>
        }, 2000);
    };

    return (
        <div className="payment-container">
            <img className='banner' src={banner}></img>
            <h2 className="payment-heading">Choose Payment Method</h2>
            <div className="payment-options">
                <div className="payment-option">
                    <SiPhonepe size={50} className="payment-icon" />
                    <h4>PhonePe</h4>
                </div>
                <div className="payment-option">
                    <FaGooglePay size={50} className="payment-icon" />
                    <h4>Google Pay</h4>
                </div>
                <div className="payment-option">
                    <SiPaytm size={50} className="payment-icon" />
                    <h4>Paytm</h4>
                </div>
                <div className="payment-option">
                    <FaCcVisa size={50} className="payment-icon" />
                    <h4>Visa</h4>
                </div>
                <div className="payment-option">
                    <FaCcMastercard size={50} className="payment-icon" />
                    <h4>MasterCard</h4>
                </div>
                <div className="payment-option">
                    <FaCcAmex size={50} className="payment-icon" />
                    <h4>Amex</h4>
                </div>
                <div className="payment-option">
                    <FaCcDiscover size={50} className="payment-icon" />
                    <h4>Discover</h4>
                </div>
                <div className="payment-option">
                    <button className="add-card-button">Add Card</button>
                </div>
            </div>
            <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
            {orderPlaced && <div className="order-animation">Order Placed Successfully!</div>}
        </div>
    );
};

export default Payment;
