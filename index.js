const express = require("express");
const path = require("path");
const app = express();



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    number: 37,
    name: "Vulpix",
    description:
      "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
    category: "Fox",
    height: 0.6,
    weight: 9.9,
    type: "Fire",
    abilitie: "Flash fire",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
  },
  {
    id: 2,
    number: 09,
    name: "Blastoise",
    description:
      "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell. ",
    category: "Shellfish",
    height: 1.6,
    weight: 85.5,
    type: "Water",
    abilitie: "Torrent",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
  },
  {
    id: 3,
    number: 59,
    name: "Arcanine",
    description:
      "The sight of it running over 6,200 miles in a single day and night has captivated many people. ",
    category: "Legendary",
    height: 1.9,
    weight: 155.0,
    type: "Fire",
    abilitie: "Intimidate",
    abilitie2: "Flash fire",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
  },
  {
    id: 4,
    number: 04,
    name: "Charmander",
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail. ",
    category: "Lizard",
    height: 0.6,
    weight: 8.5,
    type: "Fire",
    abilitie: "Blaze",
    abilitie2: "",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
];

//rotes
let pokemon = undefined;
app.get("/", (req, res) => {
  res.render("index", { pokedex, pokemon });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.get("/details/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;
  pokemon = undefined;
  res.redirect("/");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
