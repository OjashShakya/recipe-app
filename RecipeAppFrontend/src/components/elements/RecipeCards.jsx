import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Replace with actual backend API endpoint
const API_URL = "http://localhost:3000/api/recipe";

export default function RecipeCards() {
	const [recipes, setRecipes] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await fetch(API_URL);
				const data = await response.json();
				console.log(data);
				setRecipes(data.data); // Ensure the API data structure is correct
			} catch (error) {
				console.error("Error fetching recipes:", error);
			}
		};

		fetchRecipes();
	}, []);

	// Navigate to the Recipe page with the recipe data
	const handleCardClick = (recipe) => {
		// Ensure recipe.id or recipe._id exists
		const recipeId = recipe.id || recipe._id; // Adjust based on your API response
		if (recipeId) {
			navigate(`/recipe/${recipeId}`, { state: { recipe } });
		} else {
			console.error("Recipe ID is undefined");
		}
	};

	return (
		<div className="flex flex-wrap gap-2 items-start justify-between mt-10 w-max-[1000px]">
			{recipes.length > 0 ? (
				recipes.map((recipe, index) => (
					<div
						key={index}
						onClick={() => handleCardClick(recipe)} // Ensure correct ID is passed
						className="flex flex-col grow shrink basis-[30%] my-auto min-w-[300px] max-w-[32.3%] min-h-[468px] max-h-[468px]"
					>
						<div className="relative object-center flex overflow-hidden flex-col w-full min-h-[180px] max-h-[180px]">
							<img
								loading="lazy"
								src={recipe.recipeImage}
								className="flex w-full transition-transform duration-300 hover:rotate-[-5deg] hover:scale-125"
								alt={`Image of ${recipe.title}`}
							/>
						</div>
						<div className="flex flex-col items-center px-6 py-6 w-full text-center text-white bg-[#1A1A1A]">
							<div className="flex flex-col max-w-full text-lg">
								<div className="text-center text-[20px] font-sm text-[#FF4A52] cursor-pointer">{recipe.category}</div>
								<div className="mt-4 text-2xl font-bold hover:text-[#FF4A52] cursor-pointer">{recipe.title}</div>
								<div className="mt-4 text-base">{recipe.rating}</div>
							</div>
							<div className="mt-4 text-sm text-white text-opacity-50">
								{recipe.description.split(".")[0] + (recipe.description.includes(".") ? "." : "")}
							</div>
						</div>
					</div>
				))
			) : (
				<div className="text-white">Loading recipes...</div>
			)}
		</div>
	);
}
