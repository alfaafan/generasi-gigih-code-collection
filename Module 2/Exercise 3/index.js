const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const transactionRouter = require("./routers/transactionRouter");

app.get("/", (req, res) => {
  res.send("Welcome to Mobile Banking");
});

app.use("/transactions", transactionRouter);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
