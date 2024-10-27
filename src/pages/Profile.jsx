import React, { useState } from "react";
import "./profile.css";
import user from "../assets/image.png";
const Profile = () => {
  const [activeSection, setActiveSection] = useState("orders");

  const sections = {
    orders: (
      <div>
        <h2>Track Orders</h2>
        <p>Here you can track all your orders...</p>
      </div>
    ),
    address: (
      <div>
        <h2>Change Address</h2>
        <p>Here you can update your address details...</p>
      </div>
    ),
    profile: (
      <div>
        <h2>Update Profile</h2>
        <p>Here you can update your profile information...</p>
        <div className="profile">
          <img className="user" src={user}></img>

          <h3>Name</h3>

          <input type="email" id="email" name="email" />
          <br />

          <h3>Email</h3>

          <input type="email" id="email" name="email" />
          <br />
          <h3>Phone</h3>

          <input type="tel" id="phone" name="phone" />
          <br />
          <h3>Adress</h3>

          <input type="email" id="email" name="email" />
          <br />

          <br />
          <button type="submit">Update Profile</button>
        </div>
        <div className="profile-btn">
          <button type="button">Delete Account</button>

          <button type="button">Logout</button>

          <button type="button">Change Password</button>

          <button type="button">Change Email</button>

          <button type="button">Change Phone</button>

          <button type="button">Change Address</button>

          <button type="button">Change Picture</button>
        </div>
      </div>
    ),
    returnDetails: (
      <div>
        <h2>Return Details</h2>
        <p>Here you can view and manage your return requests...</p>
      </div>
    ),
    help: (
      <div>
        <h2>Help Center</h2>
        <p>Need help? Visit our help center...</p>
      </div>
    ),
    settings: (
      <div>
        <h2>Settings</h2>
        <p>Manage your account settings...</p>
      </div>
    ),
    faq: (
      <div>
        <h2>FAQ</h2>
        <p>Frequently Asked Questions...</p>
      </div>
    ),
    payment: (
      <div>
        <h2>Payment</h2>
        <p>Manage your payment methods...</p>
      </div>
    ),
    about: (
      <div>
        <h2>About Us</h2>
        <p>Learn more about our company...</p>
      </div>
    ),
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <ul>
          <li
            className={activeSection === "orders" ? "active" : ""}
            onClick={() => setActiveSection("orders")}
          >
            Track Orders
          </li>
          <li
            className={activeSection === "address" ? "active" : ""}
            onClick={() => setActiveSection("address")}
          >
            Change Address
          </li>
          <li
            className={activeSection === "profile" ? "active" : ""}
            onClick={() => setActiveSection("profile")}
          >
            Update Profile
          </li>
          <li
            className={activeSection === "returnDetails" ? "active" : ""}
            onClick={() => setActiveSection("returnDetails")}
          >
            Return Details
          </li>
          <li
            className={activeSection === "help" ? "active" : ""}
            onClick={() => setActiveSection("help")}
          >
            Help Center
          </li>
          <li
            className={activeSection === "settings" ? "active" : ""}
            onClick={() => setActiveSection("settings")}
          >
            Settings
          </li>
          <li
            className={activeSection === "faq" ? "active" : ""}
            onClick={() => setActiveSection("faq")}
          >
            FAQ
          </li>
          <li
            className={activeSection === "payment" ? "active" : ""}
            onClick={() => setActiveSection("payment")}
          >
            Payment
          </li>
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setActiveSection("about")}
          >
            About Us
          </li>
        </ul>
      </div>
      <div className="profile-content">{sections[activeSection]}</div>
    </div>
  );
};

export default Profile;
