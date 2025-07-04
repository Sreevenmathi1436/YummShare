import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/My_recepie.css';
import { useNavigate } from 'react-router-dom';

function My_recepie() {
  const [recipes, setRecipes] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [form, setForm] = useState({
    title: '',
    image: '',
    ingredients: '',
    instruction: '',
    cookingTime: ''
  });

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const authHeaders = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    if (!token || !userId) {
      alert('You must be logged in');
      return navigate('/login');
    }

    const fetchMyRecipes = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/recepie/myrecepie/${userId}`, authHeaders);
        setRecipes(res.data);
      } catch (err) {
        alert('Failed to fetch recipes. Please log in again.');
        navigate('/login');
      }
    };

    fetchMyRecipes();
  }, [navigate, token, userId]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/recepie/${id}`, authHeaders);
      setRecipes((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      alert('Delete failed');
    }
  };

  const startEdit = (recipe) => {
    setEditMode(recipe._id);
    setForm({
      title: recipe.title,
      image: recipe.image,
      ingredients: recipe.ingredients.join(', '),
      instruction: recipe.instruction,
      cookingTime: recipe.cookingTime
    });
  };

  const handleUpdate = async (id) => {
    try {
      const updatedRecipe = {
        ...form,
        ingredients: form.ingredients.split(',').map((item) => item.trim())
      };

      await axios.put(`http://localhost:3000/recepie/${id}`, updatedRecipe, authHeaders);
      setEditMode(null);

      // Refresh updated list
      const res = await axios.get(`http://localhost:3000/recepie/myrecepie/${userId}`, authHeaders);
      console.log(res.data);
      // Update the recipes state with the new data
      setRecipes(res.data);

    } catch (err) {
      alert('Update failed'+ (err.response?.data?.error || err.message));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-recipes">
      <h2>My Recipes</h2>
      {recipes.length === 0 && <p>No recipes found. Start by adding one!</p>}

      {recipes.map((r) =>
        editMode === r._id ? (
          <div key={r._id} className="recipe-box edit-mode">
            <input name="title" value={form.title} onChange={handleChange} />
            {/* <input name="image" value={form.image} onChange={handleChange} /> */}
            <input name="ingredients" value={form.ingredients} onChange={handleChange} />
            <textarea name="instruction" value={form.instruction} onChange={handleChange}></textarea>
            <input name="cookingTime" value={form.cookingTime} onChange={handleChange} />
            <button onClick={() => handleUpdate(r._id)}>Update</button>
            <button onClick={() => setEditMode(null)}>Cancel</button>
          </div>
        ) : (
          <div key={r._id} className="recipe-box">
            <h3>{r.title}</h3>
            {/* <img src={r.image} alt={r.title} /> */}
            <p><strong>Ingredients:</strong> {r.ingredients.join(', ')}</p>
            <p><strong>Instruction:</strong> {r.instruction}</p>
            <p><strong>Time:</strong> {r.cookingTime} mins</p>
            <button onClick={() => startEdit(r)}>Edit</button>
            <button onClick={() => handleDelete(r._id)}>Delete</button>
          </div>
        )
      )}
    </div>
  );
}

export default My_recepie;
