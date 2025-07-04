const express = require('express');
const router = express.Router();
const {varifiedToken,authorizerole} = require('../middleware/authMiddleware');
//admin
router.get('/admin',varifiedToken,authorizerole("admin"), (req, res) => {
     res.send('Admin Dashboard');
})
//all
router.get('/others',varifiedToken,authorizerole("user"), (req, res) => {
    res.send('User Dashboard');})

module.exports=router;


// const express = require('express');
// const router = express.Router();

// // Import User and Recipe models (adjust paths if necessary)
// const User = require('../models/User.js');
// const Recipe = require('../models/Recepie.js');

// // Import middleware for authentication and role authorization
// const { varifiedToken, authorizerole } = require('../middleware/authMiddleware');


// // ✅ GET all users (Admin only)
// router.get('/users', varifiedToken, authorizerole('admin'), async (req, res) => {
//   try {
//     // Fetch all users with username, email, role, and createdAt
//     const users = await User.find({}, 'username email role createdAt');
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// // ✅ DELETE a user by ID (Admin only)
// router.delete('/auth/:id', varifiedToken, authorizerole('admin'), async (req, res) => {
//   try {
//     // Find the user by ID
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ error: 'User not found' });

//     // Prevent deletion of admin user
//     if (user.role === 'admin') {
//       return res.status(403).json({ error: 'Cannot delete admin' });
//     }

//     // Delete user
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: 'User deleted' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });


// // ✅ GET all recipes (Admin or Authenticated Users)
// router.get('/', varifiedToken, async (req, res) => {
//   try {
//     // Fetch all recipes sorted by latest first
//     const recipes = await Recipe.find().sort({ createdAt: -1 });
//     res.status(200).json(recipes);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // ✅ DELETE a recipe by ID (Admin only)
// router.delete('/:id', varifiedToken, authorizerole('admin'), async (req, res) => {
//   try {
//     // Delete recipe by ID
//     const deleted = await Recipe.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ error: 'Recipe not found' });

//     res.status(200).json({ message: 'Recipe deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// module.exports = router;
