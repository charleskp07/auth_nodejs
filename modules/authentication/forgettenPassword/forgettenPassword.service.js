const db = require("../../../models/index.js");
const bcrypt = require("bcrypt");

const { generateOtp } = require('../../../utils/otpCode.js')
const { sendOtpEmail } = require('../../../utils/mailer.js')


const User = db.users;
const OTP_TTL_MINUTES = 15;


async function forgottenPasswordService(req, res) {
    const { email } = req.body;

    try {
        const user = await User.findOne({
            where: {
                email: email,
            },
        });

        if (user) {
            const otp = generateOtp(6);
            const otpHash = await bcrypt.hash(otp, 10);
            const expires = new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);
            sendOtpEmail(user.email, otp);

            await User.update(
                {
                    otp: otpHash,
                    expireTime: expires,
                },
                {
                    where: {
                        email: email,
                    },
                }
            );
            return res.status(201).json({
                success: true,
                message: "mail envoyé",
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "pas de user ayant ce mail",
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = forgottenPasswordService;