const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/comics");
app.use(userRoutes);
const userComics = require("./routes/character");
app.use(userComics);

app.listen(3001, () => {
  console.log("server has starded");
});
