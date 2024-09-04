import express from "express";
import dotenv, { parse } from "dotenv";
import "./connection/conect.js";
import cors from "cors";
import routes from './routes/index.js'
import bodyParser from "body-parser";



dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

routes(app)
const Port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
