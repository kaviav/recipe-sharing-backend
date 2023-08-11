const Recipe = require("../model/Recipe");

const getAllRecipes = async (req, res, next) => {
  let recipe;
  try {
    recipe = await Recipe.find();
  } catch (err) {
    console.log(err);
  }

  if (!recipe) {
    res.status(404).json({ message: "No recipes found" });
  }

  res.status(200).json({ recipe }); // this name shows in frontend browser in this name
};

const getById = async (req, res, next) => {
  let id = req.params.id;
  let recipe;
  try {
    recipe = await Recipe.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!recipe) {
    res.status(404).json({ message: "No recipe found" });
  }

  res.status(200).json({ recipe });
};

const addRecipe = async (req, res, next) => {
  let recipe;
  const {
    name,
    ingredients,
    cookingTime,
    preparation,
    notes,
    image,
    available,
  } = req.body;
  try {
    recipe = new Recipe({
      name,
      ingredients,
      cookingTime,
      preparation,
      notes,
      image,
      available,
    });
    await recipe.save();
  } catch (err) {
    res.status(500).json({ message: "Unable to precess the request" });
  }
  res.status(201).json({ recipe });
};

const editRecipe = async (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    ingredients,
    cookingTime,
    preparation,
    notes,
    image,
    available,
  } = req.body;
  let recipe;
  try {
    recipe = await Recipe.findByIdAndUpdate(id, {
      name,
      ingredients,
      cookingTime,
      preparation,
      notes,
      image,
      available,
    });
    recipe = await recipe.save();
  } catch (err) {
    console.log(err);
  }
  if (!recipe) {
    return res.status(404).json({ message: "Unable To Edit By this ID" });
  }
  return res.status(200).json({ recipe });
};

const deleteRecipe = async (req, res, next) => {
  const id = req.params.id;

  let recipe;
  try {
    recipe = await Recipe.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!recipe) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Recipe Successfully Deleted" });
};

exports.getAllRecipes = getAllRecipes;
exports.getById = getById;
exports.addRecipe = addRecipe;
exports.editRecipe = editRecipe;
exports.deleteRecipe = deleteRecipe;
