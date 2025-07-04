🍽️ YumShare – Recipe Sharing Platform

YumShare is a MERN (MongoDB, Express.js, React.js, Node.js) full-stack web app that allows users to share, search, and manage their favorite recipes. Built for individual users, the platform focuses on simplicity, security, and ease of use — just pure recipe love!

Features

-Secure User Authentication (JWT + bcrypt)

-Register, Login, and Logout functionality

-Add, Edit, Delete your own recipes

-View all recipes from all users

-Search recipes by name

-Profile page to view your username and email

-Add recipe image via URL only

-Back button & Shareable recipe detail links


Security Implementation

-Passwords are hashed using bcrypt before saving to the database.

-JWT token is created on login and stored in localStorage.

-Protected routes are accessed only with valid JWT.

-User can only modify their own recipes.
