import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar1 = () => {
  const [role, setRole] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRole(localStorage.getItem('role'));

  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top shadow">
      <div className="container-fluid">
        {/* Logo and App Title */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="CVG Logo" width="40" height="40" className="me-2" />
          <strong>YUMMY SHARE</strong>
        </Link>

        {/* Toggle for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-recipe">Add Recipe</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-recipes">My Recipes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/all-recipes">All Recipes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search">Search</Link>
                </li>
                {/* Uncomment this if admin role needed */}
                {/* {role === 'admin' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin</Link>
                  </li>
                )} */}
                <li className="nav-item">
                  <Link className="nav-link" to={`/${localStorage.getItem('userId')}`}>Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm" onClick={logout}>Logout</button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
