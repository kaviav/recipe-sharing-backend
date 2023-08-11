const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },

  cookingTime: {
    type: Number,
    required: true,
  },
  preparation: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  available: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema); // recipes
