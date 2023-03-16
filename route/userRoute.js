const express = require("express");

const ctrl = require("../controller/userCtrl");

const route = express.Router();

route.post("/add", ctrl.add);

module.exports = route;
