import app from "./app.js";
import dotenv from "dotenv";
import { connectDb } from "./db/bd.js";
dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("app is listening on port", PORT);
  });
});
