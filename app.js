require("dotenv").config();
const express = require("express");
const DbCon = require("./app/config/db");
const router = require("./app/routes/emp.routes");
const aggrRouter = require("./app/routes/aggregation.routes");

const app = express();
DbCon();
app.use(express.json());
app.use("/", router);
app.use("/", aggrRouter);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server created at ${PORT}`);
});
