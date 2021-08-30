require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 7000;
app.use(express.json());
const mongoose = require("mongoose");

const { getApi, addFav, getFav,deleteFav ,updateFav} = require("./controller/drinks");

mongoose.connect(
  `${process.env.MONGO_URL}/drinks`,
  { useNewUrlParser: true },
  { useUndifiedTopology: true }
);

app.get("/", (req, res) => {
  res.send("hi from the back");
});

app.get("/api", getApi);
app.post("/add", addFav);
app.get("/fav", getFav);
app.delete("/delete/:id", deleteFav);
app.put("/update/:id", updateFav);

app.listen(PORT, () => {
  console.log(`listening to the http://localhost:${PORT}`);
});
