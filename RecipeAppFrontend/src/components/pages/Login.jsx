import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import Header from "../elements/Header";
import Banner from "../../images/banner.jpg";
import Footer from "../elements/Footer";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const loginRef = useRef(null);

	const handleLogin = async (e) => {
		e.preventDefault(); // Prevent form from refreshing the page
		console.log(`Username: ${username}, Password: ${password}`);

		try {
			// Send login request to the backend API
			const response = await axios.post("http://localhost:3000/api/users/login", {
				username,
				password,
			});

			if (response.status === 200) {
				alert("Login successful");
				localStorage.setItem("token", response.data.token);
				navigate("/");
			}
		} catch (error) {
			if (error.response) {
				alert(error.response.data.msg); // Show error message from the server
			} else {
				alert("Error occurred during login");
			}
		}
	};

	useEffect(() => {
		loginRef?.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<div className="flex overflow-hidden flex-col bg-zinc-900 max-md:pb-12" style={{ backgroundColor: "#1A1A1A" }}>
			{/* Header */}
			<Header />

			{/* Banner */}
			<div ref={loginRef} className="flex flex-col mt-8 w-full max-md:mt-5 max-md:px-2">
				<div className="relative flex items-center bg-[#FF4A52] justify-center w-full min-h-[130px] max-md:min-h-[120px]">
					<img loading="lazy" src={Banner} className="absolute inset-0 w-full h-full object-cover opacity-10" alt="Banner" />
					<div className="relative z-10 text-4xl font-bold text-white max-md:text-2xl">Login</div>
				</div>

				{/* Login Form */}
				<div
					className="flex flex-col self-center pb-12 mt-12 max-w-[1000px] rounded-md w-full max-md:w-full max-md:px-2 max-md:mt-8"
					style={{ backgroundColor: "#262626" }}
				>
					<div className="flex flex-col w-full">
						<div className="gap-2.5 px-16 py-8 text-3xl font-bold text-white border-b-2 border-white border-opacity-30 max-md:px-4 max-md:text-xl">
							Login Form
						</div>
						<div className="flex flex-col self-center mt-10 text-xl w-[800px] max-md:w-full max-md:text-lg">
							<div className="flex flex-wrap gap-5 items-center w-full max-md:flex-col">
								{/* Username */}
								<div className="flex flex-col grow shrink my-auto text-white min-w-[180px] w-[380px] max-md:w-full">
									<label htmlFor="username">Username</label>
									<input
										type="text"
										id="username"
										className="mt-6 w-full rounded-xl min-h-[44px] px-4 py-2"
										style={{ backgroundColor: "#1A1A1A" }}
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>

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
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>

							{/* Buttons */}
							<div className="flex flex-wrap gap-5 items-center mt-10 text-white max-md:flex-col">
								<button className="px-10 py-3 rounded-md max-md:px-6" onClick={handleLogin} style={{ backgroundColor: "#FF4A52" }}>
									Login
								</button>
								<button className="px-10 py-3 rounded-md max-md:px-6 bg-[#1A1A1A]" onClick={() => navigate("/signup")}>
									Signup
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
