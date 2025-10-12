const forgottenPasswordService = require('./forgettenPassword.service');

async function forgottenPasswordController(req, res) {
    await forgottenPasswordService(req, res);
}

module.exports = forgottenPasswordController;