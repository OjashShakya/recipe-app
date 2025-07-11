const Recipe = require("../models/recipes.model.js");
// const Category = require("../models/category.model");
const { uploadOnCloundinary } = require("../utils/cloudinary.js");

// Create New Recipe
const createRecipe = async (req, res) => {
	const { title, recipeImage, description, ingredients, directions, category, rating } = req.body; // Remove chief
	const image = req.file;

	try {
		let imageUrl = "";

		// Upload image to Cloudinary
		if (req.file) {
			const uploadResponse = await uploadOnCloundinary(req.file.path);
			if (uploadResponse) {
				imageUrl = uploadResponse.url;
			} else {
				return res.status(500).json({ message: "Failed to upload image to Cloudinary." });
			}
		}

		// Create a new recipe
		const newRecipe = new Recipe({
			title,
			recipeImage: imageUrl,
			description,
			category,
			ingredients,
			directions,
			rating, // Add rating field
		});

		// Save the recipe in the database
		await newRecipe.save();
		return res.status(201).json({
			message: "Recipe created successfully",
			recipe: newRecipe,
		});
	} catch (error) {
		console.error("Error creating recipe:", error.message);
		return res.status(500).json({ message: "Server error." });
	}
};

// Get All Recipes
const getAllRecipes = async (req, res) => {
	try {
		const allRecipes = await Recipe.find();
		res.status(200).json({
			success: true,
			message: "Recipes fetched successfully",
			data: allRecipes,
		});
	} catch (error) {
		res.status(401).json({
			success: false,
			message: "Failed to fetch recipes",
			error: error.message,
		});
		console.log("Error", error);
	}
};

// Get Recipes By Id
const getRecipeById = async (req, res) => {
	try {
		const { id } = req.params;
		const recipeById = await Recipe.findById(id).populate("reviews");
		if (!recipeById) {
			return res.status(404).json({
				success: false,
				message: `Failed to fetch recipe of id ${id}`,
			});
		}
		res.status(200).json({
			success: true,
			message: "Recipe fetched successfully",
			data: recipeById,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Failed to fetch recipe by id",
			error: error.message,
		});
		console.log("Error", error);
	}
};

// Update Recipe by Id
const updateById = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(201).json({
			success: true,
			message: "Recipe updated successfully",
			data: updatedRecipe,
		});
	} catch (error) {
		res.status(401).json({
			success: false,
			message: "Failed to update by id",
			error: error.message,
		});
	}
};

// Delete By Id
const deleteById = async (req, res) => {
	try {
		const { id } = req.params;
		const recipeById = await Recipe.findByIdAndDelete(id);
		await Category.updateMany({ recipes: id }, { $pull: { recipes: id } });
		res.status(201).json({
			success: true,
			message: "Recipe deleted successfully",
			data: recipeById,
		});
	} catch (error) {
		res.status(401).json({
			success: false,
			message: "Failed to delete by id",
			error: error.message,
		});
	}
};

module.exports = {
	createRecipe,
	getAllRecipes,
	getRecipeById,
	updateById,
	deleteById,
};
