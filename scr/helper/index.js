const jwt = require("jsonwebtoken");

const generateToken = (id)=>{
    return jwt.sign({ id},process.env.JWT_SECRET_KEY,{expiresIn:"1h"})
}
const verifyToken = (token)=>{
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        return decoded;
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {generateToken,verifyToken}