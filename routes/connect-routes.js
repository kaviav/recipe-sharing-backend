const express = require("express");
const routerConnect = express.Router();

const connectController = require("../controllers/connect-controller");

routerConnect.post("/connect", connectController.addConnect);
module.exports = routerConnect;
