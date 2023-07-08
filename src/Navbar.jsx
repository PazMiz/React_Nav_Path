import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from './About'; // Import the About component
import ProductList from './Products/ProductList';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleProductCrudClick = () => {
    setShowProduct(true);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                src="https://www.paz.co.il/assets/img/PAZ_LOGO_WEB.png"
                width={200}
                alt="Home"
              />
            </Link>
          </li>
          <li>
            <Link to="/cart">ShopCart</Link>
          </li>
          <li>
            <Link to="/TicTacToe">TicTacToe</Link>
          </li>
          <li>
            <Link to="/LoginForm">Login</Link>
          </li>
          <li>
            <Link to="/RegistrationForm">Register</Link>
          </li>
          <li>
            <Link to="/TaskList">CrudTask</Link>
          </li>
          <li>
            {/* <Link to="/CheckoutForm">Checkout</Link> */}
          </li>
          <li>
            <button onClick={handleProductCrudClick}>ProductCrud</button>
          </li>
          <li>
            <button onClick={handleAboutClick}>About</button>
          </li>
        </ul>
      </nav>
      <center><h1 className="app-title">PazM React App</h1></center>
      <br />
      <br />
      <br />
      {showAbout && <About onClose={() => setShowAbout(false)} />}
      {showProduct && <ProductList onClose={() => setShowProduct(false)} />}
    </div>
  );
};

export default Navbar;
