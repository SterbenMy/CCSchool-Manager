const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database connection established successfully");
});

// set up routes

app.use("/users", require("./routes/userRouter"));
