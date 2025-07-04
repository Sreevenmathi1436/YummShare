import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'; // Assuming you have a CSS file for styling
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/loginn', {
        username,
        password,
      });

      const token = response.data.token;
      const role = response.data.user.role;
      const username2= response.data.user.username;
      // Save token and role to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('username',username2);
      


      alert('Login successful');
      localStorage.setItem('userId', response.data.user.id);
      navigate('/'); // redirect to home or dashboard
    } catch (error) {
      console.log(error);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={sendData} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;