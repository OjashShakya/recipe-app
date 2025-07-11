import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../elements/Header";
import Pizza from "../../images/bolognese.jpg";
import Banner from "../../images/banner.jpg";
import Footer from "../elements/Footer";
import Edit from "../../images/edit.png";
import Save from "../../images/save.png";
import Delete from "../../images/delete.png";
import LatestRecipe from "../elements/LatestRecipe";

export default function Recipe() {
	const navigate = useNavigate(); // Initialize useNavigate

	const recipeRef = useRef(null);

	useEffect(() => {
		recipeRef?.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<div className="flex flex-col bg-zinc-900 max-md:pb-12 overflow-hidden" style={{ backgroundColor: "#1A1A1A" }}>
			{/* Header */}
			<Header />

			{/* Banner */}
			<div ref={recipeRef} className="flex flex-col mt-8 w-full max-md:mt-5 max-md:px-2">
				<div
					className="relative flex items-center justify-center w-full min-h-[130px] max-md:min-h-[120px]"
					style={{ backgroundColor: "#FF4A52" }}
				>
					<img loading="lazy" srcSet={Banner} className="absolute inset-0 w-full h-full object-cover opacity-10" alt="Banner" />
					<div className="relative z-10 text-4xl font-bold text-white max-md:text-2xl">Spaghetti Bolognese</div>
				</div>
			</div>

			{/* Recipe Cards */}
			<div className="max-w-[1000px] mx-auto mt-12">
				<div className="max-md:max-w-full">
					<div className="flex gap-5 max-md:flex-col">
						<div className="flex flex-col w-[660px] max-md:w-full">
							<div className="flex flex-col w-full text-white max-md:mt-5 max-md:max-w-full">
								<div className="flex flex-col mt-[22px] w-full max-md:max-w-full overflow-hidden">
									<div className="flex gap-2.5 items-center py-2.5">
										<button className="flex gap-2 items-center text-white hover:underline">
											<img loading="lazy" src={Edit} className="w-7" alt="Edit" />
											Edit
										</button>
										<button className="flex gap-2 items-center text-white hover:underline" onClick={() => alert("Recipe saved!")}>
											<img loading="lazy" src={Save} className="w-7" alt="Save" />
											Save
										</button>
										<button className="flex gap-2 items-center text-white hover:underline hover:text-[#FF4A52]">
											<img loading="lazy" src={Delete} className="w-7" alt="Delete" />
											Delete
										</button>
									</div>
									<div className="overflow-hidden rounded-[3px] mt-[32px]">
										<img
											loading="lazy"
											srcSet={Pizza}
											className="object-cover w-full aspect-[2.09] max-md:max-w-full transform transition-transform duration-300 hover:rotate-[-5deg] hover:scale-125"
											alt="Trending Recipe"
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

									{/* Recipe Description */}
									<div className="mt-8 text-[20px] text-white text-opacity-80 max-md:mt-10">
										Spaghetti Bolognese is a classic Italian dish featuring a rich, savory meat sauce served over spaghetti. It's
										perfect for a hearty family meal.
									</div>

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
													400g spaghetti
												</ul>
												<ul className=" font-light list-disc pl-5 text-[22px] text-white text-opacity-80 mb-[16px]">
													2 tablespoons olive oil
												</ul>
												<ul className=" font-light list-disc pl-5 text-[22px] text-white text-opacity-80 mb-[16px]">
													1 onion (chopped)
												</ul>
												<ul className=" font-light list-disc pl-5 text-[22px] text-white text-opacity-80 mb-[16px]">
													2 garlic cloves (minced)
												</ul>
												<ul className=" font-light list-disc pl-5 text-[22px] text-white text-opacity-80 mb-[16px]">
													1 carrot (chopped)
												</ul>
												<ul className=" font-light list-disc pl-5 text-[22px] text-white text-opacity-80 mb-[16px]">
													1 celery stalk (chopped)
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
							Cook the spaghetti according to package instructions until al dente. Drain and set aside.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							In a large skillet or saucepan, heat olive oil over medium heat.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							Add the chopped onion, garlic, carrot, and celery. Sauté for about 5 minutes until the vegetables soften.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							Increase the heat to medium-high and add the ground beef. Cook until browned, breaking it up with a spoon as it cooks.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							Stir in the diced tomatoes, tomato paste, oregano, and basil. Mix well.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							Season the sauce with salt and pepper to taste.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							Reduce the heat to low and let the sauce simmer for 20-30 minutes, stirring occasionally. If the sauce thickens too much,
							add a splash of water.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							Once the sauce is ready, toss the cooked spaghetti with the Bolognese sauce until well combined.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							Serve the spaghetti Bolognese hot, garnished with fresh basil and grated Parmesan cheese, if desired.
						</ol>
						<ol className="mt-3 font-semi-bold list-decimal pl-5 text-[20px] text-white text-opacity-80 max-md:mt-10">
							Enjoy your delicious homemade spaghetti Bolognese!
						</ol>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
