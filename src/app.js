const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/database');
const appRoute = require('./app.route');

dotenv.config();
dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", appRoute);

const port = process.env.PORT || 3500;


app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})