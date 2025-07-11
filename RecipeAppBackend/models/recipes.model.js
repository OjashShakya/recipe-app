const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Recipe Title is required"],
		},
		recipeImage: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: [true, "Recipe Description is required"],
		},
		category: [
			{
				type: String,
				required: false,
			},
		],
		ingredients: [
			{
				type: String,
				required: [true, "Recipe Ingredients are required"],
			},
		],
		directions: [
			{
				type: String,
				required: [true, "Recipe Directions are required"],
			},
		],
		rating: {
			type: String, // Change this to String
			required: [false, "Recipe Rating is required"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
