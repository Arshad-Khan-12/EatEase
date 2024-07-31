import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order Your Favourite Food Here</h1>
        <p>
          Welcome to our Food Delivery App! Choose from a wide variety of
          delicious dishes. Enjoy fast and convenient delivery right to your
          doorstep.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
