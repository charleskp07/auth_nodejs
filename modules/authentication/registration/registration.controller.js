const registrationService = require("./registration.services");

async function registrationController(req, res) {

    await registrationService(req,res);
}

module.exports = registrationController;