import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    image: null,
    desc: '',
    price: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/products/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.files[0] });
    } else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', newProduct.image);
      formData.append('desc', newProduct.desc);
      formData.append('price', newProduct.price);

      const response = await axios.post('http://127.0.0.1:8000/products/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product created:', response.data);
      // Reset the form and fetch the updated product list
      setNewProduct({
        image: null,
        desc: '',
        price: '',
      });
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/products/${productId}/delete/`);
      console.log('Product deleted:', productId);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.desc}</h3>
            <p>Price: {product.price}</p>
            <img src={product.image} alt={product.desc} width="100" />
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Add Product</h2>
        <form onSubmit={addProduct} encType="multipart/form-data">
          <label htmlFor="image">Image:</label>
          <input type="file" name="image" id="image" onChange={handleInputChange} accept="image/*" />

          <label htmlFor="desc">Description:</label>
          <input type="text" name="desc" id="desc" value={newProduct.desc} onChange={handleInputChange} placeholder="Enter product description" />

          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" value={newProduct.price} onChange={handleInputChange} placeholder="Enter product price" />

          <button type="submit">Add</button>
        </form>
      </div>

      <Link to="/">
        <center> <img src="https://www.paz.co.il/assets/img/PAZ_LOGO_WEB.png" width={200} alt="Home" /></center>
      </Link>
      <h2>Come back to Pazgas home page</h2>
    </div>
  );
};

export default ProductList;
