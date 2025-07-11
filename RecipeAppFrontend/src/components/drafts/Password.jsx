import * as React from "react";

export default function Password() {
	return (
		<div
			className="flex flex-col bg-zinc-900 pb-24 max-md:pb-12 overflow-hidden"
			style={{ backgroundColor: "#1A1A1A" }}
		>
			{/* Header */}
			<div className="flex w-full border-b-2 border-white border-opacity-30 min-h-[60px] max-md:min-h-[50px]" />
			<div className="flex flex-wrap gap-6 justify-between items-center self-center mt-8 w-full text-lg text-white whitespace-nowrap max-w-[1000px] px-4 max-md:mt-6 max-md:text-base">
				<div className="flex gap-6 items-center self-stretch my-auto min-w-[180px]">
					<div className="self-stretch my-auto w-[60px]">Home</div>
					<div className="self-stretch my-auto w-[90px]">
						Category
					</div>
					<div className="self-stretch my-auto w-[70px]">Recipe</div>
				</div>
				<div className="flex gap-6 items-center self-stretch my-auto">
					<div className="self-stretch my-auto w-[60px]">Login</div>
					<div className="self-stretch my-auto w-[70px]">Signup</div>
				</div>
			</div>

			{/* Banner */}
			<div className="flex flex-col mt-8 w-full max-md:mt-5 max-md:px-2">
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
					<div className="relative z-10 text-4xl font-bold text-white max-md:text-2xl">
						Password Reset
					</div>
				</div>

				{/* Form Section */}
				<div
					className="flex flex-col self-center pb-12 mt-12 max-w-[1000px] rounded-md w-full max-md:w-full max-md:px-2 max-md:mt-8"
					style={{ backgroundColor: "#262626" }}
				>
					<div className="flex flex-col w-full">
						<div className="gap-2.5 px-16 py-8 text-3xl font-bold text-white border-b-2 border-white border-opacity-30 max-md:px-4 max-md:text-xl">
							Forgot Password?
						</div>
						<div className="flex flex-col self-center mt-10 text-xl w-[800px] max-md:w-full max-md:text-lg">
							<div className="flex flex-wrap gap-5 items-start max-md:flex-col">
								{/* New Password Input */}
								<div className="flex flex-col min-w-[180px] w-[380px] max-md:w-full">
									<label
										htmlFor="new-password"
										className="text-white"
									>
										New Password
									</label>
									<input
										type="password"
										id="new-password"
										className="mt-6 w-full rounded-xl min-h-[44px] px-4 py-2"
										style={{ backgroundColor: "#1A1A1A" }}
									/>
								</div>

								{/* Confirm Password Input */}
								<div className="flex flex-col min-w-[180px] w-[380px] max-md:w-full">
									<label
										htmlFor="confirm-password"
										className="text-white"
									>
										Confirm Password
									</label>
									<input
										type="password"
										id="confirm-password"
										className="mt-6 w-full rounded-xl min-h-[44px] px-4 py-2"
										style={{ backgroundColor: "#1A1A1A" }}
									/>
								</div>
							</div>

							{/* Submit Button */}
							<div className="flex flex-wrap gap-5 items-center mt-10 text-white max-md:flex-col">
								<button
									className="px-10 py-3 rounded-md max-md:px-6"
									style={{ backgroundColor: "#FF4A52" }}
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
