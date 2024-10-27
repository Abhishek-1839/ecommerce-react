import React, { useState } from 'react';
import './order.css'; // Import CSS file for styling
import boy from '../assets/image1.png'


const order = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [order, setOrder] = useState(null); // Placeholder for fetched order data
  const [loading, setLoading] = useState(false); // To indicate loading state

  // Dummy fetch function to simulate fetching order data
  const fetchOrderData = () => {
    setLoading(true);
    // Simulate fetching order data after 1 second
    setTimeout(() => {
      const dummyOrderData = {
        orderNumber: '123456',
        purchaseDate: '2024-06-09',
        status: 'Processing',
        // Add more fields as needed
      };
      setOrder(dummyOrderData);
      setLoading(false);
    }, 1000);
  };

  // Function to handle order tracking
  const handleTrackOrder = () => {
    fetchOrderData();
  };

  // Function to handle cancellation of order
  const handleCancelOrder = () => {
    // Implement logic to cancel the order
  };

  // Function to handle return of item
  const handleReturnItem = () => {
    // Implement logic to initiate return process
  };

  // Function to handle exchange of item
  const handleExchangeItem = () => {
    // Implement logic to initiate exchange process
  };

  return (
    <div className="order-tracking-container">
      <h1>Track Your Order</h1>
      <input
        type="text"
        placeholder="Enter Order Number or Email"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
      />
      <button onClick={handleTrackOrder} disabled={loading}>{loading ? 'Tracking...' : 'Track Order'}</button>

      {order && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Order Number: {order.orderNumber}</p>
          <p>Date of Purchase: {order.purchaseDate}</p>
          <p>Status: {order.status}</p>
          <div className="action-buttons">
            <button className="cancel-button" onClick={handleCancelOrder}>Cancel Order</button>
            <button className="return-button" onClick={handleReturnItem}>Return Item</button>
            <button className="exchange-button" onClick={handleExchangeItem}>Exchange Item</button>
          </div>
        </div>
      )}

      {/* Additional sections like order status updates, order details, and invoice section can be added here */}
      <div className='del'><img className='del-boy' src={boy}></img></div>
    </div>
  );
};

export default order;
