import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import routes from "./routes/index.js";
app.use(routes);

app.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});
