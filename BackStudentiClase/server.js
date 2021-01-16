const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//const port = process.env.NODE_ENV === 'production' ? 80 : 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(/*uri*/'mongodb://mongo:27017/database', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database connection established successfully");
});

const classRouter = require('./routes/class');
const studentRouter = require('./routes/student');

app.use('/class', classRouter);
app.use('/student', studentRouter);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});