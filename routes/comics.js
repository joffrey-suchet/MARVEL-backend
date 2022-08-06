const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv").config();

router.get("/comics", async (req, res) => {
  console.log("route comics");
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${req.query.title}&skip=${req.query.skip}`
      )
      .then((response) => {
        let comics = response.data;
        res.status(200).json(comics);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.json({ message: "probleme" });
  }
});
router.get("/comics/:characterId", async (req, res) => {
  console.log("route comics");
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        let comics = response.data;
        res.status(200).json(comics);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.json({ message: "probleme" });
  }
});

module.exports = router;
