const { where } = require('sequelize');
const db = require('../../../models/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = db.users;

async function loginService(req, res) {

    const { email, password } = req.body;



    try {
        const user = await User.findOne({
            where :{
                email: email,
            }
        });

        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({
                    user : {
                        id: user.id,
                    },
                
                },
                "ckpalika",
                {
                    expiresIn: "1d",//Duré du token
                }
            )
                return res.status(200).json({
                    "message": "connexion reussi !",
                    success: true,
                    "data": user,
                    "token" : token
                })
            } else {
                return res.status(400).json({
                    success: false,
                    message: "mot de passe incorrect !"
                });
            }
        } else {
            return res.status(400).json({
                success: false,
                message: "user non trouvé"
            });
        }

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = loginService;