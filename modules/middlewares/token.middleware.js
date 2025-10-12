const jwt = require("jsonwebtoken")

const unauthorizedResponse = (res) => {
    return res.status(401).json({
        message: "token invalide"
    })
}

async function authValidateToken(req, res, next) {
    try {
        const authorizationHeader =
            req.headers.authorization || req.headers.Authorization

        if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) { //espace à ne enlever 
            return unauthorizedResponse(res)
        }

        const token = authorizationHeader.split(" ")[1]//espace à ne enlever 

        if (!token) {
            return unauthorizedResponse(res)
        }

        const tokenVerified = jwt.verify(
            token,
            "ckpalika"
        )

        req.user = tokenVerified.user

        next()
    } catch (err) {
        console.error(err)
        return unauthorizedResponse(res)
    }
}

module.exports = authValidateToken
