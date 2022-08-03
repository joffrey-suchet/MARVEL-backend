const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());

const usercomics = require("./routes/comics");
app.use(usercomics);
const usercharacter = require("./routes/character");
app.use(usercharacter);

app.listen(process.env.PORT, () => {
  console.log("server has starded");
});
