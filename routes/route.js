const express = require("express");
const appRouter = express.Router();
const authRouter = require('../modules/authentication/authentication.route');
const authValidateToken = require("../modules/middlewares/token.middleware");
const db = require('../models/index.js');

const User = db.users;

appRouter.use('/auth', authRouter);
//route protégé 
appRouter.get("/user/:id", authValidateToken, (req, res) => {

    const id = parseInt(req.params.id);
    const user = User.findOne({
        where : {
            id : id,
        }
    });
    return res.status(200).send({
        "message": "Profile",
        "user" :user
    })
})

module.exports = appRouter