import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardMedia } from '@mui/material';
import './style.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Load userId from localStorage when component mounts
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const idFromStorage = storedUser?._id?.trim();

    if (idFromStorage && idFromStorage.length === 24) {
      setUserId(idFromStorage);
    } else {
      console.warn('Invalid or missing userId:', idFromStorage);
      alert('Session expired or user not logged in. Please log in again.');
    }

    // Fetch products from backend
    axios
      .get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleAddToCart = async (productId) => {
    if (!userId) {
      alert('User not logged in');
      return;
    }

    console.log('Sending userId:', userId);
    console.log('Length:', userId.length);
    console.log(`POST /orders/cart/${userId}/${productId}`);

    try {
      await axios.post(`http://localhost:5000/orders/cart/${userId}/${productId}`);
      alert('Added to cart!');
    } catch (err) {
      console.error('Add to cart failed:', err.response?.data || err.message);
      alert(`Failed to add to cart: ${err.response?.data?.error || 'Unknown error'}`);
    }
  };

  return (
    <div className='products'>
      <h2>Products</h2>
      {products.map(product => (
        <Card key={product._id} sx={{ margin: '16px', maxWidth: 300 }}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{ height: 200 }}
          />
          <CardContent>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p>Stock: {product.stock}</p>
            <Button
              variant="contained"
              onClick={() => handleAddToCart(product._id)}
              disabled={product.stock <= 0}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;