const mongoose = require("mongoose")

const DBconnect = () => {
    try {
        const connectdb = mongoose.connect(process.env.MONGOOSE_URI)
        console.log(`Connected to database`);

    } catch (error) {
        console.log(`Failed to connect to database`);

    }
}
module.exports = DBconnect;