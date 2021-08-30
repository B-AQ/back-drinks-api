const axios = require("axios");
const { drinksModel } = require("../model/drinks.model");

const getApi = (req, res) => {
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
    )
    .then((drinks) => res.send(drinks.data));
};

const addFav = (req, res) => {
  const { strDrink, strDrinkThumb, idDrink, email } = req.body;
  const newDrink = new drinksModel({
    strDrink: strDrink,
    strDrinkThumb: strDrinkThumb,
    idDrink: idDrink,
    email: email,
  });
  console.log(newDrink);
  newDrink.save();
};

const getFav = (req, res) => {
  const { email } = req.query;
  drinksModel.find({ email: email }, (error, data) => {
    error ? res.send(error) : res.send(data);
  });
};
const deleteFav = (req, res) => {
  const { id } = req.params;
  drinksModel.deleteOne({ _id: id }, (error, data) => {});
  drinksModel.find({}, (error, data) => res.send(data));
};
const updateFav = (req, res) => {
  const { id } = req.params;
  const { strDrink, strDrinkThumb, idDrink } = req.body;
  drinksModel.findByIdAndUpdate(
    { _id: id },
    { strDrink: strDrink, strDrinkThumb: strDrinkThumb, idDrink: idDrink },
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
};
module.exports = { getApi, addFav, getFav, deleteFav, updateFav };
