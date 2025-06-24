import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Cart from './components/Cart';


const App = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?._id;

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<UserDashboard userId={userId} />} />
      <Route path="/admin" element={<AdminDashboard userId={userId} />} />
      <Route path="/cart/:userId" element={<Cart/>} />
    </Routes>
  );
};

export default App;