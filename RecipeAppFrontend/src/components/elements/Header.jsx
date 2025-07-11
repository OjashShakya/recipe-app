import * as React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import useNavigate
import axios from "axios";

export default function Header() {
	const navigate = useNavigate(); // Initialize useNavigate
	const [user, setUser] = React.useState();
	const [randomRecipe, setRandomRecipe] = React.useState(null); // State for random recipe

	// Fetch user data
	React.useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get("http://localhost:3000/api/users/current-user", {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});
				setUser(response.data.data.fullName);
			} catch (error) {
				console.error("Error fetching user:", error);
			}
		};

		fetchUser();
	}, []);

	// Fetch random recipe from the backend
	React.useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await axios.get("http://localhost:3000/api/recipe");
				const recipes = response.data.data;
				if (recipes.length > 0) {
					const randomIndex = Math.floor(Math.random() * recipes.length);
					setRandomRecipe(recipes[randomIndex]);
				}
			} catch (error) {
				console.error("Error fetching recipes:", error);
			}
		};

		fetchRecipes();
	}, []);

	return (
		<div className="flex flex-col bg-[#1A1A1A] pb-3 max-md:pb-3 ">
			<div className="flex flex-wrap gap-6 justify-between items-center self-center mt-[24px] w-full text-lg text-white whitespace-nowrap max-w-[1000px] max-md:text-base">
				<h1 className="cursor-pointer text-[24px] font-semibold font-serif text-[#FF4A52]" onClick={() => navigate("/")}>
					<span className="text-[36px]">O</span>jash<span className="text-white">'</span>s
					<span className="font-semibold font-serif text-[#ffffff]">
						<span className="text-[36px]">D</span>elights
					</span>
				</h1>
				{user ? (
					<div className="flex flex-row">
						Cook{" "}
						<button>
							<img
								src="https://avatar.iran.liara.run/username?username=Ojash%20Shakya"
								alt="dp"
								className="flex w-[32px] h-[32px] ml-[18px]"
								onClick={() => navigate("/profile")}
							/>
						</button>
					</div>
				) : (
					<div className="flex gap-6 items-center">
						<div className="w-[60px] hover:text-[#FF4A52] cursor-pointer">
							<button onClick={() => navigate("/login")}>Login</button>
						</div>
						<div className="w-[70px] hover:text-[#FF4A52] cursor-pointer">
							<button onClick={() => navigate("/signup")}>Signup</button>
						</div>
					</div>
				)}
			</div>
			{/* Header */}
			<div className="flex w-full border-b-2 border-white border-opacity-30 min-h-[24px] max-md-[50px]" />
			<div className="flex flex-wrap gap-6 justify-between items-center self-center mt-8 w-full text-lg text-white whitespace-nowrap max-w-[1000px] max-md:mt-6 max-md:text-base">
				<div className="flex gap-6 items-center min-w-[180px]">
					<div className="w-[60px] hover:text-[#FF4A52] cursor-pointer">
						<button onClick={() => navigate("/")}>Home</button>
					</div>
					<div className="w-[90px] hover:text-[#FF4A52] cursor-pointer">Category</div>
					<div
						className="w-[70px] hover:text-[#FF4A52] cursor-pointer"
						onClick={() => navigate(`/recipe/${randomRecipe.id}`, { state: { recipe: randomRecipe } })}
					>
						Recipe
					</div>
				</div>
				<div className="flex justify-end">
					<SearchBar />
				</div>
			</div>
		</div>
	);
}
