import pgPromise from "pg-promise";
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/planets");
const setupDb = () => {
  db.none(
    `DROP TABLE IF EXISTS planets;

  CREATE TABLE planets(
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
`
  );
  db.none(`INSERT INTO planets (name) VALUES('Earth'),('Mars)`);
};
setupDb();
console.log(db);

const getAll = (req, res) => {
  const planets = db.many(`SELECT * FROM planets`);
  res.status(200).json(planets);
};
const getOne = (req, res) => {
  const { id } = req.params;
  const planet = db.one(`SELECT * FROM planets WHERE id=$1;`, id);
  res.status(200).json(planet);
};
const create = (req, res) => {
  const { name } = req.body;
  db.none(`INSERT INTO planets (name) VALUES ($1);`, name);
  res.status(201).json({ msg: "planet created" });
};
const deleteOne = (req, res) => {
  const { id } = req.params;
  db.none(`DELETE FROM planets WHERE id=$1;,`), Number(id);
  res.status(200).json({ msg: "planet deleted" });
};
const update = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.one(`UPDATE planets SET name=$2 WHERE id=$1;`, id, name);
  res.status(200).json({ msg: "planet updated" });
};

export { getAll, getOne, create, deleteOne, update };
