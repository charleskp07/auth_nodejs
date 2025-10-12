const express = require("express");
const loginController = require("./login/login.controller.js");
const registrationController = require("./registration/registration.controller.js");
const forgottenPasswordController = require("./forgettenPassword/forgettenPassword.controller.js");
const verifyOtpCodeController = require("./verifyOtpCode/verifyOtpCode.controller.js");

const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registrationController);
authRouter.post("/forgetten-password", forgottenPasswordController);
authRouter.post("/verify-otp-code", verifyOtpCodeController);


module.exports = authRouter;