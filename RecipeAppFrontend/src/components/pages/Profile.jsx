import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../elements/Header";
import Banner from "../../images/banner.jpg";
import RecipeCards from "../elements/RecipeCards";
import Footer from "../elements/Footer";

export default function Profile() {
	const navigate = useNavigate(); // Initialize useNavigate
	const profileRef = useRef(null);
	const [user, setUser] = useState(null); // State to store the user data

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch("http://localhost:3000/api/users/");
				const userData = await response.json();

				if (userData.success && userData.data.length > 0) {
					setUser(userData.data[0]);
				}
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};
		fetchUser();
		profileRef?.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<div className="flex flex-col bg-zinc-900 max-md:pb-12 overflow-hidden" style={{ backgroundColor: "#1A1A1A" }}>
			{/* Header */}
			<Header />

			{/* Banner */}
			<div ref={profileRef} className="flex flex-col mt-8 w-full max-md:mt-5 max-md:px-2">
				<div className="relative flex items-center bg-[#FF4A52] justify-center w-full min-h-[130px] max-md:min-h-[120px]">
					<img loading="lazy" src={Banner} className="absolute inset-0 w-full h-full object-cover opacity-10" alt="Banner" />
					<div className="relative z-10 text-4xl font-bold text-white max-md:text-2xl">Profile</div>
				</div>
			</div>

			{/* Content */}
			<div className="px-4 max-w-[1000px] mx-auto mt-12">
				<div className="flex flex-wrap gap-6 items-start w-full">
					<div className="flex overflow-hidden flex-col items-center rounded-full w-[200px] h-[200px]">
						<img
							loading="lazy"
							srcSet={`https://avatar.iran.liara.run/username?username=Ojash%20Shakya`}
							className="object-cover w-full h-full"
							alt="User Avatar"
						/>
					</div>
					<div className="flex flex-col ml-8 justify-center whitespace-nowrap min-w-[240px]">
						<div className="text-5xl font-semibold text-white max-md:text-3xl">{user?.fullName}</div>
						<div className="mt-2.5 text-3xl font-medium text-white text-opacity-60">@{user?.username}</div>
						<div className="mt-4 text-2xl font-medium text-white text-opacity-60">Cook</div>
					</div>
				</div>

				<div className="mt-8 flex gap-4 items-center py-4 w-full font-semibold text-center border-b-2 border-white border-opacity-30 max-md:max-w-full">
					<div className="flex justify-between items-center w-full">
						<div className="text-2xl text-white">My Recipes</div>
						<div className="cursor-pointer text-2xl text-white text-opacity-80" onClick={() => navigate("/addRecipe")}>
							+ Add Recipes
						</div>
					</div>
				</div>

				{/* Recipe Cards */}
				<div className="flex flex-wrap gap-2 items-start justify-between w-full">
					<RecipeCards />
				</div>
			</div>
			<Footer />
		</div>
	);
}
