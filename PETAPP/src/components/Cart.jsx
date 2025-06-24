import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@mui/material';
import './style.css';
import { useParams } from 'react-router-dom';

const Cart = ({ userId: propUserId }) => {
  const { userId: routeUserId } = useParams();
  const userId = propUserId || routeUserId;
  const [cartItems,setCartItems] = useState([]);
  useEffect(() => {
     if (!userId) {
      console.warn('No userId provided to Cart component');
      return;
    }

    console.log('Fetching cart for userId:', userId);
    axios.get(`http://localhost:5000/orders/${userId}`)
    .then(res => setCartItems(res.data.products))
    .catch(err => console.error('Error fetching cart:', err.response?.data || err.message));
}, [userId]);

  return (
    <div className='cart'> 
      <h2>My Orders</h2>
      {cartItems.map(item => (
       <Card key={item.productId._id}>
       <CardContent>
        <h3>{item.productId.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>₹{item.productId.price}</p>
       </CardContent>
      </Card>
))}
    </div>
  );
};

export default Cart;
