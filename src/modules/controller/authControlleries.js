const User = require("../../model/userModel")
const jwt = require("jsonwebtoken")
const brcrypt = require("bcrypt")


const maxAge = 4 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: maxAge })
}
const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            throw new Error("Email & Password required")
        }
        const isUserExists = await User.findOne({ email });
        if (isUserExists) res.json({ message: "User is arleady exists" })

        const newUser = await User.create({ email, password });
        res.status(200).json({ message: "User created successfully", data: { newUser } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });


        res.status(201).json({ message: "User loged in ", data: { user: user._id, token } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { register, login }