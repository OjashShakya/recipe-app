import React from "react";
import { useNavigate } from "react-router-dom";
import Bolognese from "../../images/bolognese.jpg";

export default function TrendingRecipe() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col w-[660px] max-md:ml-0 max-md:w-full">
			<div className="flex flex-col w-full text-white max-md:mt-5 max-md:max-w-full">
				<div className="gap-2.5 self-stretch py-2.5 w-full text-[32px] font-semibold text-left border-b-2 border-white border-opacity-30 max-md:max-w-full">
					Trending Recipes
				</div>
				<div className="flex flex-col mt-8 w-full max-md:max-w-full overflow-hidden" onClick={() => navigate("/recipeBolognese")}>
					<div className="overflow-hidden">
						<img
							loading="lazy"
							src={Bolognese}
							className="object-cover w-full aspect-[2.09] max-md:max-w-full transform transition-transform duration-300 hover:rotate-[-5deg] hover:scale-125"
						/>
					</div>
					<div className="flex overflow-hidden flex-col justify-center items-center px-20 py-7 bg-[#1a1a1a] max-md:px-5 max-md:max-w-full">
						<div className="flex flex-col items-center max-w-full w-[704px]">
							<div className="flex flex-col max-w-full text-xl w-[445px]">
								<div className="text-center text-[28px] font-sm text-[#FF4A52]">Lunch</div>
								<div className="mt-5 text-[32px] text-center font-medium hover:text-[#FF4A52] ">Spaghetti Bolognese</div>
								<div className="mt-6 text-center max-md:max-w-full">★★★★☆</div>
							</div>
							<div className="self-stretch mt-9 text-lg text-center text-white text-opacity-50 max-md:max-w-full">
								Spaghetti Bolognese is a classic Italian dish featuring a rich, savory meat sauce served over spaghetti. It's perfect
								for a hearty family meal.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
