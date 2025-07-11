import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login"; // Make sure the path matches your project structure
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import Recipe from "./components/pages/Recipe";
import DraftRecipe from "./components/drafts/draftRecipe";
import AddRecipe from "./components/pages/AddRecipe";
// import Recipe3 from "./components/drafts/Recipe3";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/recipe/:id" element={<Recipe />} />
				<Route path="/recipeBolognese" element={<DraftRecipe />} />
				<Route path="/addRecipe" element={<AddRecipe />} />
				{/* <Route path="/recipe" element={<Recipe />} /> */}
				{/* <Route path="/recipe3" element={<Recipe3 />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
