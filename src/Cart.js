import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>$10.99</td>
            <td>2</td>
            <td>$21.98</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>$5.99</td>
            <td>1</td>
            <td>$5.99</td>
          </tr>
          {/* Add more rows for other products */}
        </tbody>
      </table>

    
          <Link to="/">
           <center> <img src="https://www.paz.co.il/assets/img/PAZ_LOGO_WEB.png" width={'200'} alt="Home" /></center>
          </Link>
        <h2>come back to pazgas home page</h2>
    </div>
  );
};

export default Cart;
