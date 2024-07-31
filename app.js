const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
// const { route } = require("./routes/transactions");
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT

//middlerwares
app.use(express.json());
app.use(cors());

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db();
    app.listen(3001, () => {
        console.log("listening to port", PORT);
    })
}

server();