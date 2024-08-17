const bcrypt = require("bcrypt");
const  mongoose =  require ("mongoose");

const  userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength:8
    },
    username: {
      type: String,
      required: true,
      minlength:6
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save",async function(next){
  this.password = await bcrypt.hash(this.password,10);
  next()
})
userSchema.methods.isPasswordMatched = async function(enterPassword){
return await bcrypt.compare(enterPassword,this.password)
}
const  User = mongoose.model("User", userSchema);

module.exports = User;
