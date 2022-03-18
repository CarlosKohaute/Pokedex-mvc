const express = require("express");
const app = express();

const pokedex=[
  {
  number : 37,
  name : "Vulpix",
  description: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
  category: "Fox",
  height: 0.6,
  weight: 9.9,
  type: "Fire",
  Abilitie: "Flash fire",
  image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png"
  },
  {
    number : 9,
    name : "Blastoise",
    description: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell. ",
    category: "Shellfish",
    height: 1.6,
    weight: 85.5,
    type: "Water",
    Abilitie: "Torrent",
    image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
    }
]

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);