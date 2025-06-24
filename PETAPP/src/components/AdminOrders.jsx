import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Paper } from '@mui/material';
import './style.css';

const AdminOrders = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/auth/users', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => setUsers(res.data))
    .catch(console.error);
  }, []);

  const goToCart = (userId) => {
    navigate(`/cart/${userId}`);
  };

  return (
    <Paper className="adminproducts">  {/* Reuse existing container class */}
  <h2>View User Carts</h2>
  <div className="button-grid">
    {users.map(user => (
      <Button
        key={user._id}
        variant="contained"
        onClick={() => goToCart(user._id)}
        className="user-button"
      >
        {user.email}
      </Button>
    ))}
  </div>
</Paper>
  );
};

export default AdminOrders;