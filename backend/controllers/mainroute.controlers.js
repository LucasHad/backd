let users = require("../models/users.models");

function getAllUsers(req, res) {
  res.status(200).json(users);
}

function getSpecificUser(req, res) {
  const id = Number(req.params.id);

  if (!users[id]) {
    return res.status(400).json({
      error: "user does not exist",
    });
  }

  return res.status(200).json(users[id]);
}

function createNewUser(req, res) {
  if (!req.body.name || !req.body.age || !req.body.role) {
    return res.status(400).json({
      error: "property missing!",
    });
  }

  console.log(req.body);

  const newUser = {
    id: users.length,
    name: req.body.name,
    age: req.body.age,
    role: req.body.role,
  };

  users.push(newUser);

  return res.status(200).json(newUser);
}

function deleteUser(req, res) {
  users = users.filter((item) => item.id !== req.body.id);

  return res.status(200).send("user deleted");
}

module.exports = {
  getAllUsers,
  getSpecificUser,
  createNewUser,
  deleteUser,
};
