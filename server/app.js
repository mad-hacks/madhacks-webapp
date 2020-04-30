const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotEnvConfig = require("dotenv").config();

const app = express();

app.use(bodyparser.json());
app.use("/api", require("./routes/api"));

app.use(cors());
app.use(morgan("combined"));

mongoose.connect(process.env.DB_URL).catch((err) => {
  console.error("eror: " + err.stack);
  process.exit(1);
});
mongoose.connection.on("open", () => {
  console.log("connected to database");
});
mongoose.Promise = global.Promise;

app.listen(process.env.port || 4000, () => {
  console.log("Server is up in port 4000.......!");
});
