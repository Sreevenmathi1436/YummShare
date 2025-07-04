// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// //import '../css/Recepie_detail.css';

// function Recepie_detail() {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/recepie/${id}`);
//         setRecipe(res.data);
//       } catch (err) {
//         console.error('Error fetching recipe:', err);
//       }
//     };

//     fetchRecipe();
//   }, [id]);

//   const handleShare = () => {
//     const url = window.location.href;
//     navigator.clipboard.writeText(url)
//       .then(() => alert("Link copied to clipboard!"))
//       .catch(() => alert("Failed to copy link."));
//   };

//   if (!recipe) return <div className="text-center mt-5">Loading recipe...</div>;

//   return (
//     <div className="container py-5">
//       <div className="card shadow-lg p-4 mb-5 bg-body rounded">
//         <div className="row g-4 align-items-center">
//           <div className="col-md-6 text-center">
//             <img src={recipe.image || 'https://cdn3.vectorstock.com/i/1000x1000/79/07/vegetable-food-icon-design-template-isolated-vector-34597907.jpg'} alt={recipe.title} className="img-fluid rounded" />
//           </div>
//           <div className="col-md-6">
//             <h2 className="mb-3 text-primary">{recipe.title}</h2>
//             <p><strong>Ingredients:</strong><br /> {recipe.ingredients.join(', ')}</p>
//             <p><strong>Instruction:</strong><br /> {recipe.instruction}</p>
//             <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>

//             <div className="mt-4 d-flex gap-3">
//               <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
//                 🔙 Back
//               </button>
//               <button className="btn btn-outline-primary" onClick={handleShare}>
//                 📤 Share
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Recepie_detail;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Recepie_detail.css';

function Recepie_detail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/recepie/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error('Error fetching recipe:', err);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("Failed to copy link."));
  };

  if (!recipe) return <p className="text-center mt-5 text-white">Loading recipe...</p>;

  return (
    <div className="container mt-5">
      <div className="row align-items-center bg-dark text-white rounded p-4 shadow-lg">
        {/* Image section */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Details section */}
        <div className="col-md-8">
          <h3  className="recipe-title">{recipe.title}</h3> <br />
          <p><strong>🧂 Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <p><strong>👨‍🍳 Instruction:</strong> {recipe.instruction}</p>
          <p><strong>⏱ Cooking Time:</strong> {recipe.cookingTime} minutes</p>
          {recipe.createdBy && 
          <p><strong>👤 Created By:</strong> {recipe.createdBy?.username}</p>}

          <div className="mt-4">
            <button className="btn btn-outline-light me-3" onClick={() => navigate(-1)}>🔙 Back</button>
            <button className="btn btn-outline-light me-3" onClick={handleShare}>📤 Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recepie_detail;

