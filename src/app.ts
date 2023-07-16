import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as handlebars from "express-handlebars";

dotenv.config({ path: "env/.env." + process.env.NODE_ENV });

const app: Express = express();
const port = process.env.PORT || 5001;
const host: String = process.env.HOST || "localhost";
const hbs: handlebars.ExpressHandlebars = handlebars.create({ defaultLayout: "main" });

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.render("index", { user: { name: "test" } });
});

app.listen(port, () => {
  console.log(`[server]: Server listening on http://${host}:${port}`);
});
