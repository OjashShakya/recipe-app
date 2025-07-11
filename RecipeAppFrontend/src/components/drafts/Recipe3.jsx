import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../Header";
import Ravioli from "../../images/ravioli.jpg";
import Banner from "../../images/banner.jpg";

export default function Recipe() {
	const navigate = useNavigate(); // Initialize useNavigate

	const recipeRef = useRef(null);

	useEffect(() => {
		recipeRef?.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<div className="flex flex-col bg-zinc-900 pb-24 max-md:pb-12 overflow-hidden" style={{ backgroundColor: "#1A1A1A" }}>
			{/* Header */}
			<Header />

			{/* Banner */}
			<div ref={recipeRef} className="flex flex-col mt-8 w-full max-md:mt-5 max-md:px-2">
				<div
					className="relative flex items-center justify-center w-full min-h-[130px] max-md:min-h-[120px]"
					style={{ backgroundColor: "#FF4A52" }}
				>
					<img loading="lazy" srcSet={Banner} className="absolute inset-0 w-full h-full object-cover opacity-10" alt="Banner" />
					<div className="relative z-10 text-4xl font-bold text-white max-md:text-2xl">Ravioli pasta</div>
				</div>
			</div>

			{/* Recipe Cards */}
			<div className="max-w-[1000px] mx-auto mt-12">
				<div className="max-md:max-w-full">
					<div className="flex gap-5 max-md:flex-col">
						<div className="flex flex-col w-[660px] max-md:w-full">
							<div className="flex flex-col w-full text-white max-md:mt-5 max-md:max-w-full">
								<div className="flex flex-col mt-10 w-full max-md:max-w-full overflow-hidden">
									<div className="overflow-hidden rounded-[3px]">
										<img
											loading="lazy"
											srcSet={Ravioli}
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
												time: "4",
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
										The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a
										cone shape, and cooked slowly on a vertical rotisserie. As the outer layers of the meat cooks, it’s shaved off
										and served in a pita or other flatbread with vegetables and sauce. Doner is the “mother,” as it were, of
										Arabic shawarma, Mexican al pastor, and the popular Greek gyros. Although the sliced meat can be served on a
										platter with rice and cooked vegetables, it’s most popular as a sandwich eaten as fast street food.
									</div>

									{/* Ingredients Section */}
									<div className="flex flex-row gap-3 items-center mt-16 w-full text-white max-md:mt-10">
										<div className="flex flex-col justify-center px-10 py-12 max-w-[324px] bg-white bg-opacity-10 rounded-[3px] max-md:px-5">
											<div className="flex flex-col">
												<div className="flex gap-5 justify-center items-center text-4xl font-medium">
													<img
														loading="lazy"
														src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05088c1a15db590fd8f769afb0047dcb364f50aef6361bbc15c52253e9638e2"
														className="object-contain w-[52px]"
														alt="Ingredients"
													/>
													<div>Ingredients</div>
												</div>
												<div className="flex flex-col px-6 py-5 mt-12 w-full bg-zinc-900 rounded-[3px]">
													<div className="text-3xl font-medium">Salad</div>
													<div className="mt-3 text-3xl font-light">
														{[
															{
																quantity: ["4kg Lamb", "2kg Tomatoes", "1kg Onions"],
															},
														].map((item, index) =>
															item.quantity.map((quantityItem, qIndex) => (
																<div key={qIndex} className="mt-[12px]">
																	{quantityItem}
																</div> // Display each quantity on a new line
															))
														)}
													</div>
												</div>
											</div>
										</div>

										<div className="flex flex-col justify-center px-10 py-12 max-w-[324px] bg-white bg-opacity-10 rounded-[3px] max-md:px-5">
											<div className="flex flex-col">
												<div className="flex gap-5 justify-center items-center text-4xl font-medium">
													<img
														loading="lazy"
														src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05088c1a15db590fd8f769afb0047dcb364f50aef6361bbc15c52253e9638e2"
														className="object-contain w-[52px]"
														alt="Ingredients"
													/>
													<div>NUritions</div>
												</div>
												<div className="flex flex-col px-6 py-5 mt-12 w-full bg-zinc-900 rounded-[3px]">
													<div className="text-3xl font-medium">Salad</div>
													<div className="mt-3 text-3xl font-light">
														{[
															{
																quantity: ["4kg Lamb", "2kg Tomatoes", "1kg Onions"],
															},
														].map((item, index) =>
															item.quantity.map((quantityItem, qIndex) => (
																<div key={qIndex} className="mt-[12px]">
																	{quantityItem}
																</div> // Display each quantity on a new line
															))
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Latest Recipes Section */}
						<div className="flex flex-col min-w-[323px] max-md:w-full">
							<div className="flex flex-col w-full mt-3">
								<div className="gap-2.5 self-stretch py-2.5 w-full text-[24px] text-white text-left border-b-2 border-white border-opacity-30 max-md:max-w-full">
									Latest Recipes
								</div>
								<div className="flex flex-col mt-8 space-y-6">
									{[
										{
											imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aa43daa23f798ade12eea2d60905c4cbda15c8ce0f971cf74c1904ed7a9a3fa",
											title: "Lorem Ipsum ",
										},
										{
											imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/da70ec37612014b04cf2790c393cca3b2ff62c916d059b0248e6af265da3bc98",
											title: "Lorem Ipsum and Lorem Ipsum",
										},
										{
											imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aa43daa23f798ade12eea2d60905c4cbda15c8ce0f971cf74c1904ed7a9a3fa",
											title: "Lorem Ipsum ",
										},
										{
											imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/da70ec37612014b04cf2790c393cca3b2ff62c916d059b0248e6af265da3bc98",
											title: "Lorem Ipsum and Lorem Ipsum",
										},
									].map((recipe, index) => (
										<div key={index} className="flex w-full overflow-hidden">
											<div className="overflow-hidden min-w-40 max-h-24">
												<img
													loading="lazy"
													srcSet={recipe.imgSrc}
													className="w-40 h-24 object-cover hover:scale-110 "
													alt="Recipe"
												/>
											</div>
											<div className="flex flex-col justify-center ml-4 text-white">
												<div className="text-[16px] font-semibold">{recipe.title}</div>
												<div className="text-[12px] mt-2">Lorem Ipsum</div>
												<div className="mt-2 text-[12px]">Ratings: ★★★★☆</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
											{/* <div className="flex flex-wrap gap-0 items-start justify-between mt-10 w-[660px]">
						<div className="flex flex-col grow shrink basis-[35%] my-auto min-w-[323px] max-w-[323px]">
							<div className="relative flex overflow-hidden flex-col w-full">
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f304f29eafd0571f057fe4941002b4b434f64bc5a3058485b7d9bbe09536e7b"
									className="object-cover w-full h-[180px] transition-transform duration-300 hover:rotate-[-5deg] hover:scale-125"
									alt="Card Image 1"
								/>
							</div>
							<div
								className="flex flex-col items-center px-6 py-6 w-full text-center text-white bg-zinc-900"
								style={{ backgroundColor: "#1A1A1A" }}
							>
								<div className="flex flex-col max-w-full text-lg">
									<div className="font-semibold">Lorem Ipsum</div>
									<div className="mt-4 text-2xl font-bold">
										Lorem Ipsum and <br />
										Lorem Ipsum
									</div>
									<div className="mt-4 text-base">Ratings</div>
								</div>
								<div className="mt-4 text-sm text-white text-opacity-50">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</div>
								<div className="mt-4 text-sm">Icons</div>
							</div>
						</div>

						<div className="flex flex-col grow shrink basis-[35%] my-auto min-w-[323px] max-w-[323px]">
							<div className="relative flex overflow-hidden flex-col w-full">
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac202ef56b3018cf8e862a727845b5821d51d4544d7ede0ab6eeb7244d9c25b"
									className="object-cover w-full h-[180px] transition-transform duration-300 hover:rotate-[-5deg] hover:scale-125"
									alt="Card Image 2"
								/>
							</div>
							<div
								className="flex flex-col items-center px-6 py-6 w-full text-center text-white bg-zinc-900"
								style={{ backgroundColor: "#1A1A1A" }}
							>
								<div className="flex flex-col max-w-full text-lg">
									<div className="font-semibold">Lorem Ipsum 2</div>
									<div className="mt-4 text-2xl font-bold">
										Lorem Ipsum 2 and <br />
										Lorem Ipsum
									</div>
									<div className="mt-4 text-base">Ratings</div>
								</div>
								<div className="mt-4 text-sm text-white text-opacity-50">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</div>
								<div className="mt-4 text-sm">Icons</div>
							</div>
						</div>
					</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
