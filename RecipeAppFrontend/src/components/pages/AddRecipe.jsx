import React, { useState } from "react";
import Banner from "../../images/banner.jpg";
import Footer from "../elements/Footer";
import Header from "../elements/Header";
import { useNavigate } from "react-router-dom";

function InputBlock({ title, value, onChange, placeholder, type = "text" }) {
	return (
		<div className="flex flex-col w-full max-md:max-w-full">
			<label className="self-start text-[24px] font-semibold text-white mb-2">{title}</label>
			<input
				type={type}
				className="px-5 py-3 w-full text-[18px] rounded-[8px] bg-white bg-opacity-10 text-white text-opacity-70 placeholder-opacity-50 focus:outline-none focus:ring focus:ring-[#FF4A52] transition-all"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

export default function AddRecipe() {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [ingredients, setIngredients] = useState([""]);
	const [directions, setDirections] = useState([""]);
	const [image, setImage] = useState(null);
	const [category, setCategory] = useState("");
	const [rating, setRating] = useState("");

	// Function to handle the image file change
	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	// Handler to add new ingredient input
	const addIngredientField = () => {
		setIngredients([...ingredients, ""]);
	};

	// Handler for ingredient input changes
	const handleIngredientChange = (index, value) => {
		const newIngredients = [...ingredients];
		newIngredients[index] = value;
		setIngredients(newIngredients);
	};

	// Handler to add new direction input
	const addDirectionField = () => {
		setDirections([...directions, ""]);
	};

	// Handler for direction input changes
	const handleDirectionChange = (index, value) => {
		const newDirections = [...directions];
		newDirections[index] = value;
		setDirections(newDirections);
	};

	// Function to submit form data
	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);
		formData.append("ingredients", JSON.stringify(ingredients));
		formData.append("directions", JSON.stringify(directions)); // Save as JSON
		formData.append("category", category);
		formData.append("rating", rating);
		if (image) {
			formData.append("recipeImage", image);
		}

		try {
			const response = await fetch("http://localhost:3000/api/recipe", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				alert("Recipe created successfully!");
				// Reset form
				setTitle("");
				setDescription("");
				setIngredients([""]);
				setDirections([""]); // Reset directions
				setImage(null);
				setCategory("");
				setRating("");
				navigate("/");
			} else {
				alert("Failed to create recipe.");
			}
		} catch (error) {
			console.error("Error:", error);
			// alert("An error occurred while creating the recipe.");
		}
	};

	return (
		<div className="flex flex-col overflow-hidden bg-[#1A1A1A] max-md:pb-12">
			{/* Header */}
			<Header />

			{/* Banner */}
			<div className="flex flex-col mt-8 w-full max-md:mt-5 max-md:px-2">
				<div className="relative flex items-center bg-[#FF4A52] justify-center w-full min-h-[130px] max-md:min-h-[120px]">
					<img loading="lazy" src={Banner} className="absolute inset-0 w-full h-full object-cover opacity-10" alt="Banner" />
					<div className="relative z-10 text-4xl font-bold text-white max-md:text-2xl">Create Recipe</div>
				</div>

				<div className="flex flex-col self-center mt-12 pb-6 max-w-[1000px] w-full rounded-[15px] max-md:px-2 max-md:mt-8">
					{/* Title */}
					<InputBlock title="Title" placeholder="Your title goes here" value={title} onChange={(e) => setTitle(e.target.value)} />

					{/* Description */}
					<div className="flex flex-col mt-5 w-full max-md:max-w-full">
						<label className="self-start text-[24px] font-semibold text-white mb-2">Description</label>
						<textarea
							className="px-5 py-3 mt-1 w-full text-[18px] rounded-[8px] bg-white bg-opacity-10 text-white text-opacity-70 placeholder-opacity-50 focus:outline-none focus:ring focus:ring-[#FF4A52] transition-all"
							placeholder="Your description goes here"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							rows="5"
						/>
					</div>

					{/* Ingredients */}
					<div className="flex flex-col mt-5">
						<label className="self-start text-[24px] font-semibold text-white mb-2">Ingredients</label>
						{ingredients.map((ingredient, index) => (
							<InputBlock
								key={index}
								title=""
								placeholder="Enter ingredient"
								value={ingredient}
								onChange={(e) => handleIngredientChange(index, e.target.value)}
							/>
						))}
						<button
							onClick={addIngredientField}
							className="text-white text-opacity-70 mt-2 bg-white bg-opacity-10 py-2 px-4 rounded-[8px] w-max hover:bg-zinc-700 transition-all"
						>
							Add more ingredients
						</button>
					</div>

					{/* Directions */}
					<div className="flex flex-col mt-5">
						<label className="self-start text-[24px] font-semibold text-white mb-2">Directions</label>
						{directions.map((direction, index) => (
							<InputBlock
								key={index}
								title=""
								placeholder="Enter direction"
								value={direction}
								onChange={(e) => handleDirectionChange(index, e.target.value)}
							/>
						))}
						<button
							onClick={addDirectionField}
							className="text-white text-opacity-70 mt-2 mb-4 bg-white bg-opacity-10 py-2 px-4 rounded-[8px] w-max hover:bg-zinc-700 transition-all"
						>
							Add more directions
						</button>
					</div>

					{/* Category */}
					<InputBlock title="Category" placeholder="Enter recipe category" value={category} onChange={(e) => setCategory(e.target.value)} />

					{/* Rating */}
					<InputBlock title="Rating" placeholder="Enter recipe rating" value={rating} onChange={(e) => setRating(e.target.value)} />

					{/* Image Upload */}
					<div className="mt-4 flex flex-col w-full">
						<label className="text-[24px] font-semibold text-white mb-2">Upload Image</label>
						<input
							type="file"
							accept="image/*"
							className="text-white text-opacity-70 bg-white bg-opacity-10 min-h-[51px] rounded-[8px] px-4 py-3 w-full text-[14px] focus:outline-none"
							onChange={handleImageChange}
						/>
						{image && (
							<div className="mt-2 text-white text-[16px]">
								<span>Selected image: {image.name}</span>
							</div>
						)}
					</div>

					{/* Submit Button */}
					<button
						onClick={handleSubmit}
						className="mt-12 cursor-pointer text-[20px] text-white bg-[#FF4A52] py-3 px-6 rounded-[8px] text-center w-full max-w-[200px] self-center hover:bg-[#FF3A40] transition-all"
					>
						Create Recipe
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
