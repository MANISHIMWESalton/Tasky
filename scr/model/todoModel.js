import mongoose from "mongoose";

const TodoSchema =  mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,

        }

    },
    {
        timestamps:true
    }
);

const Todo = mongoose.model("Todo",TodoSchema);

export default Todo;