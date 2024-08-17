const authRepositories = require ("../../auth/repository/authRepositories")
const register = async(req,res)=>{
 try {
  const {email,username,password} = req.body;
  const newUser =  await authRepositories.register(req.body);
  const isUserexist = 
  res.status(201).json({message:"User created successfully",data:{newUser}})
 } catch (error) {
  res.status(500).json({message:error.message})
 }
}
const login = async(req,res)=>{
  try {
    const {email,password} = req.body
    const findUser = await authRepositories.findUserByEmail(email)
    if(!findUser){
      res.status(404).json({message:"Account Not found"})
    }
    const isMatched = await findUser.isPasswordMatched(password)
    if(!isMatched) return res.status().json({message:"invalid credentials"})

  } catch (error) {
    
  }
}
module.exports = {
  register
}