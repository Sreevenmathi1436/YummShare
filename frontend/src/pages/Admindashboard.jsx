import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../css/AdminDashboard.css'; // Make sure you have this CSS file

function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [activeContributors, setActiveContributors] = useState(0);
  const [newToday, setNewToday] = useState({ users: 0, recipes: 0 });

  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetchAdminStats();
  }, []);

  const fetchAdminStats = async () => {
    try {
      // Fetch all users
      const usersRes = await axios.get('http://localhost:3000/admin/users', headers);
      setTotalUsers(usersRes.data.length);

      const today = new Date().toISOString().slice(0, 10);
      let newUsers = 0;
      const userContributors = new Set();

      usersRes.data.forEach(user => {
        // Defensive: handle missing createdAt
        if (user.createdAt && user.createdAt.slice(0, 10) === today) newUsers++;
      });

      // Fetch all recipes
      const recipeRes = await axios.get('http://localhost:3000/admin/', headers);
      setTotalRecipes(recipeRes.data.length);

      let newRecipes = 0;
      recipeRes.data.forEach(recipe => {
        // Defensive: handle missing createdAt
        if (recipe.createdAt && recipe.createdAt.slice(0, 10) === today) newRecipes++;
        if (recipe.createdBy) userContributors.add(recipe.createdBy.toString());
      });

      setActiveContributors(userContributors.size);
      setNewToday({ users: newUsers, recipes: newRecipes });
    } catch (err) {
      alert('Unable to fetch admin data');
      console.error(err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>👋 Welcome Admin,</h2>
      <div className="stats-grid">
        <div className="card stat-card">
          <h4>Total Users</h4>
          <p>{totalUsers}</p>
        </div>
        <div className="card stat-card">
          <h4>Total Recipes</h4>
          <p>{totalRecipes}</p>
        </div>
        <div className="card stat-card">
          <h4>Active Contributors</h4>
          <p>{activeContributors}</p>
        </div>
        <div className="card stat-card">
          <h4>New Today</h4>
          <p>Users: {newToday.users} <br /> Recipes: {newToday.recipes}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
