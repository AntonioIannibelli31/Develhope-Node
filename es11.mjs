import express from "express";
import Joi from "joi";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
app.use(express.json());

// type Planet = {
//   id: number;
//   name: string;
// };

// type Planets = Planet[];
let planets = [
  {
    id: 1,
    name: "Terra",
  },
  {
    id: 2,
    name: "Marte",
  },
  {
    id: 3,
    name: "Venere",
  },
];

const planetStructure = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});
app.get("/", (req, res) => {
  res.status(200).json(planets);
});
app.get("/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));
  res.status(200).json(planet);
});
app.post("/", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  const validPlanet = planetStructure(newPlanet);
  if (validPlanet.error) {
    return res.status(400).json({ msg: "Error while creating planet " });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "planet created" });
  }

  console.log(planets);
});
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  res.status(200).json({ msg: "planet updated" });
  console.log(planets);
});
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  planets = planets.filter((planet) => planet.id !== Number(id));
  res.status(200).json({ msg: "planet deleted" });
  console.log(planets);
});

app.listen(port, () => {
  console.log(`Server partito correttamente, porta http://localhost:${port}`);
});

// Make sure every planet is created with id and name.
// Validate planet fields where appropriate.
