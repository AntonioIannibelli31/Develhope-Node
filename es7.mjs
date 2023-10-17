import { writeFile } from "node:fs";
const content = "contenuto del nuovo file";

writeFile("file.txt", content, (err) => {
  if (err) {
    console.log("errore");
  }
});
