const express = require("express");
const {
  getAllUsers,
  getSpecificUser,
  createNewUser,
  deleteUser,
} = require("../controllers/mainroute.controlers");

const mainRoute = express.Router();

mainRoute.get("/", getAllUsers);

mainRoute.get("/:id", getSpecificUser);

mainRoute.post("/newUser", createNewUser);

mainRoute.delete("/deleteUser", deleteUser);

module.exports = {
  mainRoute,
};
