import { useState } from 'react';
import axios from 'axios';
import '../css/Add_recepie.css'; // Assuming you have a CSS file for styling
const Add_recepie = () => {
  const [form, setForm] = useState({
    title: '',
    image: '',
    ingredients: '',
    instruction: '',
    cookingTime: '',
    createdBy: '', 
    createdAt:'' 
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const createdBy = JSON.parse(atob(token.split('.')[1])).id;

    try {
      const res = await axios.post(
        'http://localhost:3000/recepie/',
        {
          title: form.title,
          image: form.image.trim() !==''? form.image : "https://cdn3.vectorstock.com/i/1000x1000/79/07/vegetable-food-icon-design-template-isolated-vector-34597907.jpg " ,
          ingredients: form.ingredients.split(',').map((i) => i.trim()),
          instruction: form.instruction,
          cookingTime: form.cookingTime,
          createdAt: form.createdAt || new Date(),
          createdBy,
        },
        {
          headers: { Authorization: `Bearer ${token} `},
        }
      );

      alert('Recipe created successfully');
      setForm({
        title: '',
        image: '',
        ingredients: '',
        instruction: '',
        cookingTime: '',
        createdBy: '',
        createdAt: '',
      });
    } catch (err) {
      alert('Error creating recipe');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <input type="text" name="title" className="form-control" placeholder="Title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" name="image" className="form-control" placeholder="Image URL" value={form.image} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" name="ingredients" className="form-control" placeholder="Ingredients (comma separated)" value={form.ingredients} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <textarea name="instruction" className="form-control" rows="4" placeholder="Instruction" value={form.instruction} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="number" name="cookingTime" className="form-control" placeholder="Cooking Time (minutes)" value={form.cookingTime} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Submit Recipe</button>
      </form>
    </div>
  );
};

export default Add_recepie;