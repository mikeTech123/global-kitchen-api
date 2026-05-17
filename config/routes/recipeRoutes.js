const express = require("express");


const {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/", getRecipes);

router.post("/", createRecipe);

router.patch("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

module.exports = router;