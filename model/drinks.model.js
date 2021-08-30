const mongoose = require("mongoose");

const drinksSchema = new mongoose.Schema({
  strDrink: String,
  strDrinkThumb: String,
  idDrink: String,
  email: String,
});

const drinksModel = mongoose.model("drinksModel", drinksSchema);

module.exports = { drinksModel };
