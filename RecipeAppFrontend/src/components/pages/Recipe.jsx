import React, { useEffect, useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import Banner from "../../images/banner.jpg";
import Edit from "../../images/edit.png";
import Save from "../../images/save.png";
import Delete from "../../images/delete.png";
import LatestRecipe from "../elements/LatestRecipe";

export default function Recipe() {
	const { id } = useParams();
	const location = useLocation();
	const recipe = location.state?.recipe;
	const recipeRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (recipeRef.current) {
			recipeRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	// Handle the case where the recipe data is not available
	if (!recipe) {
		return <div>Recipe not found</div>;
	}

	const handleDelete = async () => {
		const confirmed = window.confirm("Are you sure you want to delete this recipe?");
		if (confirmed) {
			try {
				await fetch(`http://localhost:3000/api/recipe/${id}`, {
					method: "DELETE",
				});
				alert("Recipe deleted successfully!");
				navigate("/"); // Redirect to the recipes list or another page
			} catch (error) {
				console.error("Error deleting the recipe:", error);
				alert("Failed to delete the recipe.");
			}
		}
	};

	return (
		<div className="flex flex-col bg-[#1A1A1A] overflow-hidden">
			<Header />

			<div ref={recipeRef} className="flex flex-col mt-8 w-full max-md:mt-5 max-md:px-2">
				<div className="relative flex items-center bg-[#FF4A52] justify-center w-full min-h-[130px] max-md:min-h-[120px]">
					<img loading="lazy" src={Banner} className="absolute inset-0 w-full h-full object-cover opacity-10" alt="Banner" />
					<div className="relative z-10 text-4xl font-bold text-white max-md:text-2xl">{recipe.title}</div>
				</div>
			</div>

			<div className="max-w-[1000px] mx-auto mt-12">
				<div className="max-md:max-w-full">
					<div className="flex gap-5 max-md:flex-col">
						<div className="flex flex-col w-[660px] max-md:w-full">
							<div className="flex flex-col w-full text-white max-md:mt-5 max-md:max-w-full">
								<div className="flex flex-col mt-[22px] w-full max-md:max-w-full overflow-hidden">
									<div className="flex gap-2.5 items-center py-2.5">
										<button
											className="flex gap-2 items-center text-white hover:underline"
											// onClick={() => navigate(`/edit/${id}`)}
											onClick={() => navigate(`/addRecipe`)}
										>
											<img loading="lazy" src={Edit} className="w-7" alt="Edit" />
											Edit
										</button>
										<button className="flex gap-2 items-center text-white hover:underline" onClick={() => alert("Recipe saved!")}>
											<img loading="lazy" src={Save} className="w-7" alt="Save" />
											Save
										</button>
										<button
											className="flex gap-2 items-center text-white hover:underline hover:text-[#FF4A52]"
											onClick={handleDelete}
										>
											<img loading="lazy" src={Delete} className="w-7" alt="Delete" />
											Delete
										</button>
									</div>
									<div className="flex overflow-hidden rounded-[3px] mt-[32px]">
										<img
											loading="lazy"
											src={recipe.recipeImage}
											className="object-cover w-full aspect-[2.09] max-md:max-w-full transform transition-transform duration-300 hover:rotate-[-5deg] hover:scale-125"
											alt={recipe.title}
										/>
									</div>

									{/* Recipe Details */}
									<div className="flex justify-between gap-3 mt-5 w-full text-lg">
										{[
											{
												label: "Prep Time",
												time: "20 Mins",
												imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/55e6b24cc2786e59b87ebe99f3c49f73ccd99c40167af56fb2d4504cea1e5216",
											},
											{
												label: "Cook Time",
												time: "50 Mins",
												imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cb3dc7b66e0279c91293abbf9fb9a920b6e8a4b42084f95c9366f5c67c277e5",
											},
											{
												label: "Serving",
												time: "2",
												imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/192f2c25d383fd1c9b91daaf3d75f8df1b28d3924b3811c39eb68b68d3ce1a76",
											},
											{
												label: "Serv Size",
												time: "Flatbread",
												imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/59ef4cf17339e47b3359f8ba661db4f489a0e742eb7a7ef56562e0ec482cdf72",
											},
										].map(({ label, time, imgSrc }, idx) => (
											<div
												key={idx}
												className="flex flex-row justify-center items-center p-3 w-40 rounded-[3px] bg-white bg-opacity-10"
											>
												<div>
													<img loading="lazy" src={imgSrc} className="object-contain w-8" alt={`${label} Icon`} />
												</div>
												<div className="felx pl-4">
													<div className="text-white text-base mt-1">{label}</div>
													<div className="mt-1 text-white text-sm font-light">{time}</div>
												</div>
											</div>
										))}
									</div>

									<div className="mt-8 text-[20px] text-white text-opacity-80 max-md:mt-10">{recipe.description}</div>

									<div className="flex flex-col gap-3 items-center mt-16 w-full text-white max-md:mt-10">
										{/* Ingredients Section */}
										<div className="flex flex-col justify-center px-10 pt-5 pb-10 min-w-[660px] bg-white bg-opacity-10 rounded-[3px] max-md:px-5">
											<div className="flex flex-row self-stretch pb-2.5 w-full text-[32px] font-semibold text-left max-md:max-w-full">
												<img
													loading="lazy"
													src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05088c1a15db590fd8f769afb0047dcb364f50aef6361bbc15c52253e9638e2"
													className="object-contain w-[36px] mr-5"
													alt="Ingredients"
												/>
												Ingredients
											</div>
											<div className="flex flex-col px-6 py-5 mt-4 w-full bg-[#1a1a1a] rounded-[3px]">
												<ul className=" font-light list-disc pl-5 text-[22px] text-white text-opacity-80 mb-[16px]">
													{recipe.ingredients?.length > 0 ? (
														JSON.parse(recipe.ingredients).map((ingredient, index) => (
															<li key={index} className="mt-[16px]">
																{ingredient}
															</li>
														))
													) : (
														<li>No ingredients available.</li>
													)}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Latest Recipes Section */}
						<LatestRecipe />
					</div>
					{/* Directions Section */}
					<div className="flex flex-col justify-center text-white py-12 max-w-[1000px]">
						<div className="gap-2.5 self-stretch py-2.5 w-full text-[32px] font-semibold text-left border-b-2 border-white border-opacity-30 max-md:max-w-full">
							Directions
						</div>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							{recipe.directions?.length > 0 ? (
								JSON.parse(recipe.directions).map((direction, index) => (
									<li key={index} className="mt-[12px]">
										{direction}
									</li>
								))
							) : (
								<li>No directions available.</li>
							)}
						</ol>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
