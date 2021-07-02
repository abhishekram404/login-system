const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/login-system",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to database");
  }
);

app.use("/", routes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
