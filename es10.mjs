import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
app.use(express.json());

// type Planet = {
//   id: number,
//   name: string,
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

app.get("/", (req, res) => {
  res.send("Default Message");
});

app.listen(port, () => {
  console.log(`Server partito correttamente, porta ${port}`);
});
