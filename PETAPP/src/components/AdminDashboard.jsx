import { useState } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import AdminProducts from './AdminProducts';
import AddProducts from './AddProducts';
import AdminOrders from './AdminOrders';
import './style.css';
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('viewProducts');
  const handleSignOut = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('role');
    navigate('/');
  }

  return (
    <div className='admind'>
      <AppBar position="static">
        <Toolbar className='tb1'>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Admin Panel</Typography>
          <Button color="inherit" onClick={() => setActivePage('viewProducts')}>Update Products</Button>
          <Button color="inherit" onClick={() => setActivePage('addProduct')}>Add Product</Button>
          <Button color="inherit" onClick={() => setActivePage('AdminOrders')}>Orders</Button>
          <Button color="inherit" onClick={handleSignOut}>Sign out</Button>
        </Toolbar>
      </AppBar>

      {activePage === 'viewProducts' && <AdminProducts />}
      {activePage === 'addProduct' && <AddProducts />}
      {activePage === 'AdminOrders' && <AdminOrders />}
    </div>
  );
};

export default AdminDashboard;
