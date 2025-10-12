const db = require('../../../models/index.js');
const bcrypt = require('bcrypt');

const User = db.users;

async function registrationService(req, res) {

    const { name, email, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    // console.log(encryptedPassword);


    try {
        const user = await User.create({
            name: name,
            email: email,
            password: encryptedPassword
        })

        return res.status(201).json({
            "message": " inscription reussi !",
            success: true,
            "data": user
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = registrationService;