const verifyOtpCodeService = require("./verifyOtpCode.service");

async function verifyOtpCodeController(req, res) {
    await verifyOtpCodeService(req, res);
}

module.exports = verifyOtpCodeController;