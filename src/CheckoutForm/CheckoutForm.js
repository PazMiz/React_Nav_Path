import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckoutForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [order, setOrder] = useState({
    desc: '',
    price: 0,
    amount: 0,
  });
  const [checkoutOrders, setCheckoutOrders] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/products/');
      console.log('API Response:', response.data);
      setProducts(response.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "product") {
      const selectedProductData = products.find((product) => product.id === value);
      if (selectedProductData) {
        setOrder({
          ...order,
          desc: selectedProductData.desc || '',
        });
      }
    } else {
      setOrder({ ...order, [name]: value });
    }
  };
  
  const handleProductSelect = (e) => {
    const selectedProductId = e.target.value;
    setSelectedProduct(selectedProductId);
  
    const selectedProductData = products.find((product) => product.id === selectedProductId);
    if (selectedProductData) {
      setOrder({
        ...order,
        desc: selectedProductData.desc || '', // Use an empty string if desc is null or empty
        price: selectedProductData.price || 0, // Use 0 if price is null or empty
        amount: 0,
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/orders/create/', order);
      console.log('Order created:', response.data);
      // Add the new order to the checkoutOrders array
      setCheckoutOrders([...checkoutOrders, response.data]);
      // Reset the form
      setOrder({
        desc: '',
        price: 0,
        amount: 0,
      });
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <select name="product" value={selectedProduct} onChange={handleProductSelect}>
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.desc}
            </option>
          ))}
        </select>
        <input type="text" name="desc" value={order.desc || ''} onChange={handleChange} placeholder="Description" />
        <input type="number" name="price" value={order.price || ''} onChange={handleChange} placeholder="Price" />
        <input type="number" name="amount" value={order.amount || ''} onChange={handleChange} placeholder="Amount" />
        
        <button type="submit">Checkout</button>
      </form>

      <h3>My Checkout Orders:</h3>
      {checkoutOrders.map((checkoutOrder) => (
        <div key={checkoutOrder.id}>
          <p>Description: {checkoutOrder.desc}</p>
          <p>Price: {checkoutOrder.price}</p>
          <p>Amount: {checkoutOrder.amount}</p>
        </div>
      ))}
    </div>
    
  );
  
};


export default CheckoutForm;
