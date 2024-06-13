require("dotenv").config();
const express = require("express");
const productRoute = require("./routes/productRoute");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

//Use Cors
app.use(cors());
//Use Json
app.use(express.json());
// Use Route
app.use("/api", productRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database Connect Successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
