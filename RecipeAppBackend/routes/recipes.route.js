const express = require("express");
const { getAllRecipes, createRecipe, getRecipeById, updateById, deleteById } = require("../controllers/recipes.controller");
const authenicate = require("../middlewares/auth.middleware");
const { upload } = require("../middlewares/multer.middleware");
const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", upload.single("recipeImage"), createRecipe);
router.get("/:id", getRecipeById);
router.patch("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;
