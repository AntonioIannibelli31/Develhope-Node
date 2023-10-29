import express from "express";
import "dotenv/config";
import {
  create,
  update,
  deleteOne,
  getAll,
  getOne,
} from "./controllers/planets";

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/", getAll);
app.get("/:id", getOne);
app.post("/", create);
app.put("/:id", update);
app.delete("/:id", deleteOne);

app.listen(port, () => {
  console.log(`Server partito correttamente, porta http://localhost:${port}`);
});

// Add planets Controller (controllers/planets.ts) consisting of the following functions:
// getAll getOneById create updateById deleteById.
// Then, replace callback functions in routes (req: Request, res: Response) => with the functions above.
// (For example: the route /api/planets should use getAll function.)
