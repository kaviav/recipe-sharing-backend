const express = require("express");
const router = express.Router();

const recipesController = require("../controllers/recipes-controller");

// const Recipe= require("../model/Recipe")

router.get("/getall", recipesController.getAllRecipes);
router.get("/getone/:id", recipesController.getById);
router.post("/add", recipesController.addRecipe);

router.put("/Edit/:id", recipesController.editRecipe);
router.delete("/delete/:id", recipesController.deleteRecipe);

module.exports = router;
