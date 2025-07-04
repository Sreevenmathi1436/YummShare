import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/All_recepie.css';
import { useNavigate } from 'react-router-dom';

function All_recepie() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get('http://localhost:3000/recepie/get');
      setRecipes(res.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div
      className="container text-white"
      style={{ paddingTop: '1190px', paddingBottom: '150px'}}
    >
      <h2 className="text-center mb-5"> All Recipes</h2>

      {recipes.length === 0 ? (
        <p className="text-center">No recipes found.</p>
      ) : (
        <div className="row g-4 justify-content-center">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="col-md-4"
              onClick={() => navigate(`/recepie/${recipe._id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card h-100 bg-dark text-light shadow">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="card-img-top"
                  style={{
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">⏱ {recipe.cookingTime} mins</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default All_recepie;
