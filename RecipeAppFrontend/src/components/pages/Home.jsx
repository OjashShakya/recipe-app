import * as React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../elements/Header";
import Bolognese from "../../images/bolognese.jpg";
import Footer from "../elements/Footer";
import RecipeCards from "../elements/RecipeCards";
import LatestRecipe from "../elements/LatestRecipe";
import TrendingRecipe from "../elements/TrendingRecipe";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col bg-[#1A1A1A] overflow-hidden">
			{/* Header */}
			<Header />

			{/* Recipe Cards */}
			<div className="max-w-[1000px] mx-auto mt-6">
				{/* Big card */}
				<div
					onClick={() => navigate("/recipeBolognese")}
					className="flex overflow-hidden relative flex-col items-center justify-end px-4 pt-20 w-full text-xl text-white min-h-[480px] mx-auto cursor-pointer"
				>
					<img src={Bolognese} alt="Bolognese Recipe" loading="lazy" className="object-cover absolute inset-0 w-full h-full" />
					<div className="relative flex flex-col items-center justify-center w-full bg-[#1a1a1a] max-w-[520px] py-8 px-8 mx-auto text-center">
						<div className="flex flex-col max-w-full min-h-[100px]">
							<div className="text-center text-[20px] font-sm text-[#FF4A52]">Lunch</div>
							<div className="mt-5 text-[32px] font-medium hover:text-[#FF4A52]">Spaghetti Bolognese</div>
							<div className="mt-5">★★★★☆</div>
						</div>
					</div>
				</div>

				<RecipeCards />

				<div className="flex flex-col w-full max-w-[1000px] max-md:max-w-full">
					<div className="max-md:max-w-full">
						<div className="flex gap-4 max-md:flex-col">
							<TrendingRecipe />
							<LatestRecipe />
						</div>
					</div>
					<div className="gap-2.5 self-stretch py-2.5 w-full text-[32px] mt-5 font-semibold text-white text-left border-b-2 border-white border-opacity-30 max-md:max-w-full">
						Explore More Recipes
					</div>
					<RecipeCards />
				</div>
			</div>

			<Footer />
		</div>
	);
}
