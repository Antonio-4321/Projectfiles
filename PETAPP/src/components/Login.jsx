import { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify({ _id: res.data.userId, name: res.data.name }));
      setRole(res.data.role);
      navigate(res.data.role === 'admin' ? '/admin' : '/user');
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/register', { email, password ,role});
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify({ _id: res.data.userId, name: res.data.name }));
      setRole(res.data.role);
      navigate(res.data.role === 'admin' ? '/admin' : '/user');
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
    }
  };

  return (
    <div className='login-container'> 
      <h2>Welcome to PetStore</h2>
      <br /><br /><br /><br /><br />
      <TextField label="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <TextField label="Role(admin/user)" onChange={(e) => setRole(e.target.value)} /><br /><br />
      <Button variant="contained" onClick={handleLogin}>Login</Button><br /><br />
      <Button variant="contained" onClick={handleRegister}>Register</Button>
    </div>
  );
};

export default Login;
