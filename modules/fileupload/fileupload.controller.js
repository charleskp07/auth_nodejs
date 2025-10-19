const fileuploadService = require("./fileupload.service");


async function fileuploadController(req, res) {
    await fileuploadService(req, res);
}

module.exports = fileuploadController;