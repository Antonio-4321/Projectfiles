import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, TextField, Button } from '@mui/material';
import './style.css';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [edits, setEdits] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleUpdate = (id) => {
    axios.put(`http://localhost:5000/products/update/${id}`, edits)
      .then(res => {
        alert('Updated!');
        setProducts(products.map(p => p._id === id ? res.data : p));
      })
      .catch(err => console.error(err));
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`http://localhost:5000/products/delete/${id}`);
      alert('Product deleted!');
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };


  return (
    <div className='adminproducts'> 
      <h2>Edit Products</h2>
      {products.map(product => (
        <Card key={product._id}>
  <CardContent>
    <h3>{product.name}</h3>
    
    {/* Display current product image */}
    <img 
      src={product.image} 
      alt={product.name} 
      style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
    />

    <TextField 
      label="New Price" 
      type='number' 
      onChange={e => setEdits({ ...edits, price: Number(e.target.value) })} 
    />
    <TextField 
      label="New Stock" 
      type='number' 
      onChange={e => setEdits({ ...edits, stock: Number(e.target.value) })} 
    />
    <TextField 
      label="New Image" 
      onChange={e => setEdits({ ...edits, image: e.target.value })} 
    />
    <Button onClick={() => handleUpdate(product._id)}>Update</Button>
    <Button onClick={() => handleDelete(product._id)}>Delete</Button>
  </CardContent>
</Card>
      ))}
    </div>
  );
};

export default AdminProducts;
