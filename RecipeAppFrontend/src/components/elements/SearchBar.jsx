import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const navigate = useNavigate();

	// Fetch recipes from the API
	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await fetch("http://localhost:3000/api/recipe");
				const data = await response.json();
				setRecipes(data.data); // Assuming the API response structure is { data: [{...}, {...}] }
			} catch (error) {
				console.error("Error fetching recipes:", error);
			}
		};

		fetchRecipes();
	}, []);

	const handleSearch = (event) => {
		const value = event.target.value;
		setSearchTerm(value);

		// Filter recipes as user types
		if (value) {
			const filtered = recipes.filter((recipe) => recipe.title.toLowerCase().includes(value.toLowerCase()));
			setFilteredRecipes(filtered);
		} else {
			setFilteredRecipes([]);
		}
	};

	const handleRecipeClick = (recipe) => {
		// Navigate to the recipe page and pass the recipe data
		navigate(`/recipe/${recipe.id}`, { state: { recipe } });
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && filteredRecipes.length > 0) {
			// Navigate to the first filtered recipe when Enter is pressed
			handleRecipeClick(filteredRecipes[0]);
		}
	};

	return (
		<div className="relative">
			{/* Search bar container */}
			<div className="flex overflow-hidden gap-5 justify-right items-center px-2.5 py-2 w-[323px] h-[36px] text-[16px] rounded-[5px] bg-white bg-opacity-10 text-white text-opacity-50 max-md:max-w-full">
				<input
					type="text"
					placeholder="Search here..."
					value={searchTerm}
					onChange={handleSearch}
					onKeyDown={handleKeyDown} // Add onKeyDown event
					className="bg-transparent outline-none text-white w-full"
				/>
				<button>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/101b675c094cfedc2a52ad4adce946ea28e9ff4fb5daa4ea210db0203aefca88?placeholderIfAbsent=true&apiKey=5fece6f67dea4149a310df69187313a8"
						className="object-contain items-center w-[24px] aspect-square"
					/>
				</button>
			</div>

			{/* Display filtered recipes */}
			{filteredRecipes.length > 0 && (
				<ul
					className="absolute top-full left-0 mt-1.5 w-[323px] text-[16px] bg-[#313131] rounded-[5px] z-50 max-h-[240px] pt-2 pl-2.5 overflow-y-auto"
					style={{ zIndex: 9999 }} // Ensuring it displays over other elements
				>
					{filteredRecipes.map((recipe) => (
						<li
							key={recipe.id}
							onClick={() => handleRecipeClick(recipe)}
							className="hover:text-white hover:text-opacity-50 cursor-pointer h-[36px]"
						>
							{recipe.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default SearchBar;
