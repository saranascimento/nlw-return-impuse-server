import express from "express";
import cors from "cors";
import { routes } from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "1mb" }));
app.use(express.json());
app.use(routes);

// porta 3333
app.listen(3333, () => {
  console.log("HTTP server running!");
});
