import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Products from './Products';
import Cart from './Cart';
import './style.css';
import { useNavigate } from 'react-router-dom';

const UserDashboard = ({ userId: passedUserId }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('products');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const finalId = passedUserId || storedUser?._id;
    if (finalId) {
      setUserId(finalId);
    } else {
      console.warn('No user ID found. Redirecting to login may be appropriate.');
    }
  }, [passedUserId]);

  useEffect(() => {
    console.log('UserDashboard active userId:', userId);
  }, [userId]);

  const handleSignOut = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('role');
    navigate('/');
  }

  return (
    <div className='userd'>
      <AppBar position="static">
        <Toolbar className='tb2'>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pet Store
          </Typography>
          <Button color="inherit" onClick={() => setActivePage('products')}>
            View Products
          </Button>
          <Button color="inherit" onClick={() => setActivePage('cart')}>
            Cart
          </Button>
          <Button color="inherit" onClick={handleSignOut}>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>

      {userId ? (
        activePage === 'products' ? (
          <Products userId={userId} />
        ) : (
          <Cart userId={userId} />
        )
      ) : (
        <Typography sx={{ padding: 4 }}>Loading user information...</Typography>
      )}
    </div>
  );
};

export default UserDashboard;