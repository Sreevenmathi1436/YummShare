import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/reg', {
        username,
        email,
        password,
        role
      });

      alert('Registration successful');
      navigate('/login'); // redirect to login page
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* <div className="mb-3">
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}

        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;