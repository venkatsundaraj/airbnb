const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const userRouter = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");
const mongoose = require("mongoose");
const hotelRouter = require("./routes/hotelRoutes");
const cors = require("cors");
const mongoDB = require("./config/db");

mongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", userRouter);
app.use("/api", hotelRouter);

app.use("/api/hello", function (req, res, next) {
  res.status(200).json({ message: "ok" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.use("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
    // next()
  });
} else {
  app.use("/", (req, res, next) => {
    res.json("please set to production");
  });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started at ${PORT}`));
