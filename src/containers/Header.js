import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <div className="ui inverted fixed menu" style={{ padding: "10px 0" }}>
        <div className="ui container">
          {/* Logo */}
          <Link to="/" className="header item" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            MegaMart 
          </Link>

          {/* Desktop Menu Links */}
          <div className="right menu">
            <Link to="/" className="item">Home</Link>
            <Link to="/products" className="item">Products</Link>
            <Link to="/cart" className="item">
              <i className="shopping cart icon"></i> Cart
            </Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-toggle item" onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer" }}>
            <i className="bars icon"></i>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="ui inverted vertical menu" style={{ marginTop: "50px" }}>
          <Link to="/" className="item" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" className="item" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/cart" className="item" onClick={() => setMenuOpen(false)}>Cart</Link>
          <Link to="/contact" className="item" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Add Space Below Header */}
      <div style={{ marginBottom: "70px" }}></div>
    </>
  );
};

export default Header;
