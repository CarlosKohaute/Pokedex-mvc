const express = require("express");
const path = require("path")
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

const pokedex=[
  {
  number : 37,
  name : "Vulpix",
  description: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
  category: "Fox",
  height: 0.6,
  weight: 9.9,
  type: "Fire",
  abilitie: "Flash fire",
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
    abilitie: "Torrent",
    image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
    },
    {
      number : 59,
      name : "Arcanine",
      description: "The sight of it running over 6,200 miles in a single day and night has captivated many people. ",
      category: "Legendary",
      height: 1.9,
      weight: 155.0,
      type: "Fire",
      abilitie: "Intimidate", 
      abilitie2: "Flash fire",
      image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png"
      }
  
]

//rotes
app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
