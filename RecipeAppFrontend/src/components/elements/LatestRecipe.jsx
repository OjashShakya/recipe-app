import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Replace with actual backend API endpoint for latest recipes
const LATEST_RECIPES_API_URL = "http://localhost:3000/api/recipe";

export default function LatestRecipe() {
	const [latestRecipes, setLatestRecipes] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchLatestRecipes = async () => {
			try {
				const response = await fetch(LATEST_RECIPES_API_URL);
				const data = await response.json();
				// Limit to the last 5 recipes
				setLatestRecipes(data.data.slice(-6).reverse()); // Fetch the last 5 recipes
			} catch (error) {
				console.error("Error fetching latest recipes:", error);
			}
		};

		fetchLatestRecipes();
	}, []);

	// Navigate to the Recipe page with the recipe data
	const handleCardClick = (recipe) => {
		const recipeId = recipe.id || recipe._id; // Adjust based on your API response
		if (recipeId) {
			navigate(`/recipe/${recipeId}`, { state: { recipe } });
		} else {
			console.error("Recipe ID is undefined");
		}
	};

	return (
		<div className="flex flex-col min-w-[323px] max-md:w-full">
			<div className="flex flex-col w-full mt-3">
				<div className="gap-2.5 self-stretch py-2.5 w-full text-[24px] text-white text-left border-b-2 border-white border-opacity-30 max-md:max-w-full">
					Latest Recipes
				</div>
				<div className="flex flex-col mt-8 space-y-5">
					{latestRecipes.length > 0 ? (
						latestRecipes.map((recipe, index) => (
							<div key={index} onClick={() => handleCardClick(recipe)} className="flex w-full overflow-hidden cursor-pointer">
								<div className="overflow-hidden min-w-40 max-h-24">
									<img
										loading="lazy"
										src={recipe.recipeImage}
										className="w-40 h-24 object-cover hover:scale-110"
										alt={`Image of ${recipe.title}`}
									/>
								</div>
								<div className="flex flex-col justify-center ml-4 text-white">
									<div className="text-[16px] font-semibold">{recipe.title}</div>
									<div className="text-[12px] mt-2 text-[#FF4A52]">{recipe.category}</div>
									<div className="mt-2 text-[12px]">Ratings: {recipe.rating}</div>
								</div>
							</div>
						))
					) : (
						<div className="text-white">Loading latest recipes...</div>
					)}
				</div>
			</div>
		</div>
	);
}
