const express = require("express");
const cors = require("cors");
const { mainRoute } = require("./routes/mainroute.route");
const app = express();

app.use(express.json());

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3000/newUser",
    "http://localhost:8000/deleteUser",
  ],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(mainRoute);

module.exports = app;
