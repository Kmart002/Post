const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./Route/postRoute");

const app = express();

dotenv.config();
app.use(cors());

app.use("/api/v1/", router);
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

mongoose.connect("mongodb://0.0.0.0:27017").then(()=> {
    console.log("data base connection established")
}).catch((err)=> {
console.log("database connection failed" + err);
})