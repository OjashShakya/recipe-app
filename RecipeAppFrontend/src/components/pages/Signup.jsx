import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../elements/Header";
import axios from "axios"; // Import axios
import Footer from "../elements/Footer";

export default function Signup() {
	const navigate = useNavigate();
	const signupRef = useRef(null);

	useEffect(() => {
		signupRef?.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	const handleSignup = async (e) => {
		e.preventDefault();

		const fullName = document.getElementById("fullName").value;
		const email = document.getElementById("email").value;
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const confirmPassword = document.getElementById("confirmPassword").value;
		const accountType = document.getElementById("accountType").value;

		console.log(fullName, email, username, password, confirmPassword, accountType);

		try {
			const response = await axios.post("http://localhost:3000/api/users/register", {
				fullName,
				email,
				username,
				password,
				confirmPassword,
				accountType,
			});

			if (response.status === 201) {
				alert("Signup successful");
				navigate("/login"); // Redirect to login page
			}
		} catch (error) {
			if (error.response) {
				alert(error.response.data.msg); // Show error message
			} else {
				alert("Error occurred during signup");
			}
		}
	};

	return (
		<div className="flex overflow-hidden flex-col bg-[#1a1a1a] max-md:pb-12">
			<Header />

			{/* Banner */}
			<div ref={signupRef} className="flex flex-col mt-8 w-full max-md:mt-5 max-md:px-2">
				<div
					className="relative flex items-center justify-center w-full min-h-[130px] max-md:min-h-[120px]"
					style={{ backgroundColor: "#FF4A52" }}
				>
					<img
						loading="lazy"
						srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/22959b80ff69e3d4b38e221c8c17799ea0ef3bd36cdc70836505dba1569e4324?width=2000"
						className="absolute inset-0 w-full h-full object-cover opacity-60"
						alt="Banner"
					/>
					<div className="relative z-10 text-4xl font-bold text-white max-md:text-2xl">Signup</div>
				</div>
			</div>

			{/* Signup Form */}
			<div
				className="flex flex-col self-center pb-12 mt-12 max-w-[1000px] rounded-md w-full max-md:w-full max-md:px-2 max-md:mt-8"
				style={{ backgroundColor: "#262626" }}
			>
				<div className="flex flex-col w-full">
					<div className="gap-2.5 px-16 py-8 text-3xl font-bold text-white border-b-2 border-white border-opacity-30 max-md:px-4 max-md:text-xl">
						Create Account
					</div>
					<div className="flex flex-col self-center mt-10 text-xl w-[800px] max-md:w-full max-md:text-lg">
						<div className="flex flex-wrap gap-5 items-center w-full max-md:flex-col">
							{/* Full Name */}
							<div className="flex flex-col grow shrink my-auto text-white min-w-[180px] w-[380px] max-md:w-full">
								<label htmlFor="fullName">Full Name</label>
								<input type="text" id="fullName" className="mt-6 w-full rounded-xl min-h-[44px] px-4 py-2 bg-[#1a1a1a]" />
							</div>

							{/* Email */}
							<div className="flex flex-col grow shrink my-auto min-w-[180px] w-[380px] max-md:w-full">
								<label htmlFor="email" className="text-white">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="mt-6 w-full text-white rounded-xl min-h-[44px] px-4 py-2"
									style={{ backgroundColor: "#1A1A1A" }}
								/>
							</div>
						</div>

						<div className="flex flex-wrap gap-5 items-center w-full max-md:flex-col mt-5">
							{/* Username */}
							<div className="flex flex-col grow shrink my-auto text-white min-w-[180px] w-[380px] max-md:w-full">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									id="username"
									className="mt-6 w-full rounded-xl min-h-[44px] px-4 py-2"
									style={{ backgroundColor: "#1A1A1A" }}
								/>
							</div>

							{/* Account Type */}
							<div className="flex flex-col grow shrink my-auto text-white min-w-[180px] w-[380px] max-md:w-full">
								<label htmlFor="accountType">Account Type</label>
								<select id="accountType" className=" mt-6 w-full bg-[#1a1a1a] rounded-xl min-h-[44px] px-4 py-">
									<option value="cook">Cook</option>
									<option value="foodEnthusiast">Food Enthusiast</option>
									<option value="planner">Planner</option>
								</select>
							</div>
						</div>

						<div className="flex flex-wrap gap-5 items-center w-full max-md:flex-col mt-5">
							{/* Password */}
							<div className="flex flex-col grow shrink my-auto min-w-[180px] w-[380px] max-md:w-full">
								<label htmlFor="password" className="text-white">
									Password
								</label>
								<input
									type="password"
									id="password"
									className="mt-6 w-full text-white rounded-xl min-h-[44px] px-4 py-2"
									style={{ backgroundColor: "#1A1A1A" }}
								/>
							</div>
							{/* Confirm Password */}
							<div className="flex flex-col grow shrink my-auto text-white min-w-[180px] w-[380px] max-md:w-full">
								<label htmlFor="confirmPassword">Confirm Password</label>
								<input
									type="password"
									id="confirmPassword"
									className="mt-6 w-full rounded-xl min-h-[44px] px-4 py-2"
									style={{ backgroundColor: "#1A1A1A" }}
								/>
							</div>
						</div>

						{/* Buttons */}
						<div className="flex flex-wrap gap-5 items-center mt-10 text-white max-md:flex-col">
							<button
								type="submit"
								className="px-10 py-3 rounded-md max-md:px-6"
								style={{ backgroundColor: "#FF4A52" }}
								onClick={handleSignup}
							>
								Submit
							</button>
							<button
								type="button"
								className="px-10 py-3 rounded-md max-md:px-6"
								style={{ backgroundColor: "#1A1A1A" }}
								onClick={() => navigate("/login")}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
