import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Cart from './Cart';
import ProductList from './Products/ProductList';
import About from './About'; // Import the About component
import TicTacToe from './TicTacToe/TicTacToe';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './Register/RegistrationForm';
import TaskList from './Task/TaskList';
import CheckoutForm from './CheckoutForm/CheckoutForm';
 import Carousel from './Carousel/Carousel';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/ProductCrud" element={<ProductList />} />
      <Route path="/TicTacToe" element={<TicTacToe />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/RegistrationForm" element={<RegistrationForm />} />
      <Route path="/TaskList" element={<TaskList />} />
      <Route path="/CheckoutForm" element={<CheckoutForm />} />
      <Route path="/Carousel" element={<Carousel />} />






    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
