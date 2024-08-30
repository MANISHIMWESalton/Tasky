const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
}, { timeseries: true })

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;