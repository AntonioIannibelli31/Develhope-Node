import { Request, Response } from "express";
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];
let planets: Planets = [
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

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};
const getOne = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));
  res.status(200).json(planet);
};
const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };

  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "planet created" });

  console.log(planets);
};
const deleteOne = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  res.status(200).json({ msg: "planet updated" });
  console.log(planets);
};
const update = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((planet) => planet.id !== Number(id));
  res.status(200).json({ msg: "planet deleted" });
  console.log(planets);
};

export { getAll, getOne, create, deleteOne, update };
