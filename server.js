import express from "express";
import index from "./src/index.js";


const app = express();

app.use(express.json());


app.use(index)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} lulz :-)\n`);
});
