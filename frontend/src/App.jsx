import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar1';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddRecipe from './pages/Add_recepie';
import MyRecipes from './pages/My_recepie';
import AllRecipes from './pages/All_recepie';
import SearchRecipe from './pages/Search_recepie';
import RecipeDetails from './pages/Recepie_detail';
import Profile from './components/Profile';
import AdminDashboard from './pages/Admindashboard';
function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
        <Route path="/search" element={<SearchRecipe />} />
        <Route path="/recepie/:id" element={<RecipeDetails />} />
        <Route path="/:id" element={<Profile />} />
        
        {/* <Route path="/admin" element={<AdminDashboard/>} /> */}
      </Routes>
    </Router>
);
}
export default App;
