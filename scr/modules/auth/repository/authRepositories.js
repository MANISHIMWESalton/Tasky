const User =  require ("../../../model/userModel");

const  register = async(body)=>{
    return await User.create(body)
}
const  findUserByEmail = async(email)=>{
    return await User.create(email)
}

module.exports = {
    register,
    findUserByEmail
}