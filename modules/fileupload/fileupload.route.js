const express = require("express");
const fileuploadController = require("./fileupload.controller");

const fileuploadRouter = express.Router();


fileuploadRouter.post("/fileupload", fileuploadController);



module.exports = fileuploadRouter;