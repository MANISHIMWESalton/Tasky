import Todo from "../../../model/todoModel";

const createTask = async(body)=>{
    return await Todo.create(body)
}
const getTask = async(id)=>{
    return await Todo.findById(id)
}
const getTasks = async()=>{
return await Todo.find()
}
const updateTask = async(body,id)=>{
return await Todo.findByIdAndUpdate(body,id)
}
const deleteTask = async(id)=>{
    return await Todo.findByIdAndDelete(id)
}

export default{
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}