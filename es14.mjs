import express from "express";
import "dotenv/config";
import multer from "multer";
import {
  create,
  update,
  deleteOne,
  getAll,
  getOne,
  createImage,
} from "./controllers/planets.mjs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", getAll);
app.get("/:id", getOne);
app.post("/", create);
app.put("/:id", update);
app.delete("/:id", deleteOne);
app.post("/:id/image", upload.single("image"), createImage);

app.listen(port, () => {
  console.log(`Server partito correttamente, porta http://localhost:${port}`);
});
