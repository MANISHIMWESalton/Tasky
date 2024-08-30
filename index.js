const express = require("express");
const dbconnection = require("./scr/db/connectDB");
require("dotenv").config()

const router = require("./scr/router/index")
const app = express();

const PORT = 5000;
app.use(express.json())
app.use("/api", router)

app.listen(PORT, async () => {
    await dbconnection()
    console.log(`server is running on port: http://locahost${PORT}`);
})

module.exports = app 