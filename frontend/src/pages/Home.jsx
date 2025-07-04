import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/blog_noodles.jpg';
import img2 from '../assets/blog_pizza.jpg';
import img3 from '../assets/blog_cake.jpg';
import img4 from '../assets/blog_jamun.jpg';
import img5 from '../assets/blog_samosa.jpg';
import img6 from '../assets/blog_kulfi.jpg';
import img7 from '../assets/blog_dessert.jpg';

import cvgLogo from '../assets/logo1.png';
import '../css/Home.css';

const Home = () => {
  return (

    

    <div className="home-wrapper">
      {/* Header Section */}
      <header className="text-center mb-5" data-aos="fade-down">
        <div className="welcome-box">
          <h1 className="display-4 fw-bold welcome-title">
            <img src={cvgLogo} alt="CVG Logo" width="60" className="me-2" />
            <span className="welcome-black">Welcome to <b>YumShare</b>!</span>
          </h1>
        </div>
        <p className="blockquote">Share and explore mouth-watering recipes from fellow foodies!</p>
        <Link to="/all-recipes" className="btn btn-warning btn-lg mt-3 shadow">
          🍽 Explore All Recipes
        </Link>
      </header>

      <div className="card-container">
          <div className="recipe-card">
            <img src={img1} alt="Noodles" className="recipe-img" />
            <p className="quote">"Twirl it, slurp it, love every bite!"</p>
          </div>

          <div className="recipe-card">
            <img src={img6} alt="Spicy" className="recipe-img" />
            <p className="quote">"Crispy outside, spicy surprise inside!"</p>
          </div>

          <div className="recipe-card">
            <img src={img2} alt="Dessert" className="recipe-img" />
            <p className="quote">"A little slice of cheesy heaven!"</p>
          </div>

          <div className="recipe-card">
            <img src={img3} alt="Spicy" className="recipe-img" />
            <p className="quote">"Every slice tells a story of sweetness!"</p>
          </div>
        </div>

        <div className="card-container">
          <div className="recipe-card">
            <img src={img4} alt="Noodles" className="recipe-img" />
            <p className="quote">"Soft, syrupy, and simply irresistible!"</p>
          </div>

          <div className="recipe-card">
            <img src={img7} alt="Dessert" className="recipe-img" />
            <p className="quote">"Life is short. Eat dessert first."</p>
          </div>

          <div className="recipe-card">
            <img src={img5} alt="Dessert" className="recipe-img" />
            <p className="quote">"Life is short. Eat dessert first."</p>
          </div>

          
        </div>

      
      {/* Quotes Section */}
      <section className="quotes-section text-center mt-6">
        <blockquote className="blockquote">
          <p>"The secret ingredient is always love."</p>
          <footer className="blockquote-footer">YumShare Community</footer>
        </blockquote>
        <blockquote className="blockquote">
          <p>"Cooking is an art, but all art requires knowing something about the techniques and materials."</p>
          <footer className="blockquote-footer">Nathan Myhrvold</footer>
        </blockquote>
      </section>

      {/* About us */}
      {/* About Us Section */}
{/* <section className="container my-5">
  <h2 className="text-center mb-4">About Us</h2>
  <div className="row">
    <div className="col-md-6">
      <h4>🍲 Who We Are</h4>
      <p>
        YumShare is your go-to place for sharing, discovering, and cooking amazing recipes from
        around the world. Whether you're a beginner or a seasoned chef, we welcome everyone who
        finds joy in food.
      </p>
      <p>
        Our goal is to connect passionate foodies and provide a platform where love for food can
        turn into delicious experiences.
      </p>
    </div>
    <div className="col-md-6">
      <h4>🎯 Our Mission</h4>
      <ul>
        <li>Inspire creativity in kitchens everywhere</li>
        <li>Preserve traditional and regional recipes</li>
        <li>Build a supportive and fun cooking community</li>
        <li>Encourage food sharing, feedback, and collaboration</li>
      </ul>
    </div>
  </div>
</section>
 */}



      {/* Footer Section */}
      <footer className="footer bg-dark text-white text-center py-3 mt-4 ">
        <p>&copy; {new Date().getFullYear()} YumShare.</p>
      </footer>
    </div>
  );
};

export default Home;
