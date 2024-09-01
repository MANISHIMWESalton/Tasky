const express = require("express");
const cookieParser = require("cookie-parser");
const dbconnection = require("./src/config/dbConnect");
require("dotenv").config()

const router = require("./src/router/index")
const app = express();

const PORT = 8000;
app.use(express.json())
app.use(cookieParser());
app.use("/api", router)

app.listen(PORT, async () => {
    await dbconnection()
    console.log(`server is running on port: http://locahost${PORT}`);
})

module.exports = app 