const db = require("../../../models/index");
const bcrypt = require("bcrypt");
const User = db.users;

async function verifyOtpCodeService(req, res) {
    const { otp, email, password } = req.body;
    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.findOne({
            where: {
                email: email,
            },
        });

        if (!user.otp || !user.expireTime ||  Date.now() > user.expireTime) {
            return res.status(400).json({ message: "Code expiré ou invalide" });
        } else {
            if (await bcrypt.compare(otp, user.otp)) {
                await user.update(
                    {
                        otp: null,
                        password: encryptedPassword,
                        expireTime: null,
                    },
                    {
                        where: {
                            email: email,
                        },
                    },
                );

                return res.status(201).json({
                    success: true,
                    message: "update succesfully",
                    user: user,
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: "error to update",
                });
            }


        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }


}

module.exports = verifyOtpCodeService;


