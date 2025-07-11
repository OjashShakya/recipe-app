import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
	const navigate = useNavigate(); // Initialize useNavigate
	return (
		<div className="flex flex-col mt-[140px] justify-center bg-white bg-opacity-5 overflow-hidden">
			<div className="flex flex-wrap gap-6 justify-center items-center self-center mt-[60px] w-full text-lg text-white whitespace-nowrap max-w-[1000px] max-md:text-base">
				<h1 className="text-[32px] font-semibold font-serif text-[#FF4A52]">
					<span className="text-[44px]">O</span>jash<span className="text-white">'</span>s
					<span className="font-semibold font-serif text-[#ffffff]">
						<span className="text-[44px]">D</span>elights
					</span>
				</h1>
			</div>
			<div className="flex flex-col gap-6 justify-center items-center self-center mt-20 mb-[60px] w-full text-lg text-white text-opacity-50 whitespace-nowrap max-w-[1000px] max-md:mt-6 max-md:text-base">
				<div className="flex gap-6 items-center min-w-[180px]">
					<div className="w-auto pr-[10px] cursor-pointer">
						<button onClick={() => navigate("/")}>Home</button>
					</div>
					<div className="w-auto pr-[10px] cursor-pointer">Category</div>
					<div className="w-auto pr-[10px] cursor-pointer">Recipe</div>
					<div className="w-auto pr-[10px] cursor-pointer">Email</div>
					<div className="w-auto pr-[10px] cursor-pointer">About Us</div>
					<div className="w-auto cursor-pointer">Contact Us</div>
				</div>
				<div className="flex mt-[20px] justify-center">Ojash Shakya - Copyright ©</div>
			</div>
		</div>
	);
}
