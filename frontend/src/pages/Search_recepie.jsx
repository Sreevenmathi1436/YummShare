import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Search_recepie.css';

function Search_recepie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.get(`http://localhost:3000/recepie/search?title=${searchTerm}`);
      setRecipes(res.data);
    } catch (err) {
      setRecipes([]);
      if (err.response?.status === 404) {
        setError('No recipes found');
      } else {
        setError('Error searching for recipes');
      }
    }
  };

  return (
    <div className="center-page">
    <div className="search-container">
      <h2 className="search-title">Search Recipes</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter recipe title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-img"
              />
            )}
            <div className="recipe-info">
              <h4
                className="recipe-name"
                onClick={() => navigate(`/recepie/${recipe._id}`)}
              >
                {recipe.title}
              </h4>
              <p className="recipe-time">⏱ {recipe.cookingTime} mins</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Search_recepie;
