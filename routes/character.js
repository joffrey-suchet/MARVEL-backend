const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  console.log("route characterId");
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        const characters = response.data;
        res.status(200).json(characters);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.json({ message: "probleme" });
  }
});
module.exports = router;
