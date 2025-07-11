const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const User = require("../models/users.model");
const Recipe = require("../models/recipes.model");

// Create new User for user sign up
const userRegister = async (req, res) => {
	const { fullName, email, username, password, confirmPassword, accountType } = req.body;

	if (password !== confirmPassword) {
		return res.status(400).json({ msg: "Passwords do not match" });
	}

	try {
		// Check if user already exists
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ msg: "User already exists" });
		}

		// Create new user
		const hashedPassword = await bcrypt.hash(password, 10);
		user = new User({
			fullName,
			email,
			username,
			password: hashedPassword,
			confirmPassword,
			accountType,
		});

		await user.save();

		res.status(201).json({ msg: "User registered successfully" });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
};

// User Login
const userLogin = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(401).json({ success: false, message: "User not found" });
		}
		const isMatched = await bcrypt.compare(password, user.password);
		if (!isMatched) {
			return res.status(401).json({ success: false, message: "Incorrect Password" });
		}

		const token = jwt.sign(
			{
				username: user.username,
				password: user.password,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);

		res.status(200).json({
			success: true,
			message: "User Logged In successfully",
			token,
		});
	} catch (error) {
		console.error("Error", error);
	}
};

// Add to favourite
const addToFavourite = async (req, res) => {
	const { recipeId } = req.body;

	try {
		const recipe = await Recipe.findById(recipeId);
		if (!recipe) {
			return res.status(404).json({ success: false, message: "Recipe not found" });
		}

		console.log(req.user.id);

		const user = await User.findById(req.user.id);
		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		user.favouriteRecipes.push(recipeId);
		await user.save();

		res.status(200).json({
			success: true,
			message: "Recipe added to favorites",
			favouriteRecipes: user.favouriteRecipes,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

// Remove from favourites
const removeFromFavourites = async (req, res) => {
	const { recipeId } = req.body;
	try {
		const user = await User.findById(req.user.id);
		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		user.favouriteRecipes = user.favouriteRecipes.filter((item) => item != recipeId);
		await user.save();

		res.status(200).json({
			success: true,
			message: "Recipe removed from favorites",
			favouriteRecipes: user.favouriteRecipes,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

// Fetch All Favourite Recipe of a User
const getFavourites = async (req, res) => {
	try {
		// Populate the favoriteBooks field
		const user = await User.findById(req.user.id).populate("favouriteRecipes");
		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		res.status(200).json({
			success: true,
			message: "Favourite Recipes fetched successfully",
			favouriteRecipes: user.favouriteRecipes,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

// Fetch All Users
const getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find();
		res.status(200).json({
			success: true,
			message: "Users fetched successfully",
			data: allUsers,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

// Update User by Id
const updateUserById = async (req, res) => {
	const { id } = req.params;
	try {
		const userById = await User.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			success: true,
			message: "User Updated successfully",
			data: userById,
		});
	} catch (error) {
		res.status(401).json({
			success: false,
			message: "Failed to update user by id",
		});
	}
};

// Delete User By Id
const deleteUserById = async (req, res) => {
	const { id } = req.params;
	try {
		const userById = await User.findByIdAndDelete(id);
		res.status(200).json({
			success: true,
			message: "User deleted successfully",
			data: userById,
		});
	} catch (error) {
		res.status(401).json({
			success: false,
			message: "Failed to delete user by id",
		});
	}
};

const getCurrentUser = async (req, res) => {
	try {
		const { id, username, email, role, favouriteRecipes } = req.user;

		res.status(200).json({
			success: true,
			message: "User fetched successfully",
			data: { id: id, fullName: username, email, role, favouriteRecipes },
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};
module.exports = {
	userRegister,
	userLogin,
	addToFavourite,
	getFavourites,
	removeFromFavourites,
	getAllUsers,
	updateUserById,
	deleteUserById,
	getCurrentUser,
};
