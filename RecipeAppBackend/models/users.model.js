const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	fullName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	confirmPassword: { type: String, required: true },
	accountType: { type: String, required: true },
});

module.exports = new mongoose.model("User", userSchema);
