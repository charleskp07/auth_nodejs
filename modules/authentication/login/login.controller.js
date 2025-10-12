const loginService = require("./login.services");


async function loginController(req, res)  {

    await loginService(req,res)
}

module.exports = loginController;


