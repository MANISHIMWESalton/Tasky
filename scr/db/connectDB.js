const mongoose =  require ("mongoose");
const  dbconnection = ()=>{
try {
    const  connectDB = mongoose.connect(process.env.MONGOOSE_URI)
    console.log(`connected to database`);
} catch (error) {
    console.log(`fail to connect`);
}
}
module.exports = dbconnection