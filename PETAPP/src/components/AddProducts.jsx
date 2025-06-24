import { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './style.css';

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', price: 0, stock: 0 ,image : ''});

  const handleAddProduct = async () => {
    try {
      await axios.post('http://localhost:5000/products/admin/add', product);
      alert('Product added!');
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className='addproducts'>
      <h2>Add Product</h2><br /><br />
      <TextField label="Name" onChange={e => setProduct({ ...product, name: e.target.value })} /><br /><br />
      <TextField label="Price" type="number" onChange={e => setProduct({ ...product, price: Number(e.target.value) })} /><br /><br />
      <TextField label="Stock" type="number" onChange={e => setProduct({ ...product, stock: Number(e.target.value) })} /><br /><br />
      <TextField label="Image URL" onChange={e => setProduct({ ...product, image: e.target.value })} /><br /><br />
      <Button variant="contained" onClick={handleAddProduct}>Add</Button>
    </div>
  );
};

export default AddProduct;
