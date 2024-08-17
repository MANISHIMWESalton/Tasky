const Todo =  require ("../../../model/todoModel");
    
const  createTask = async(body)=>{
    return await Todo.create(body)
}
const  getTask = async(id)=>{
    return await Todo.findById(id)
}
const  getTasks = async()=>{
return await Todo.find()
}
const  updateTask = async(body)=>{
  
return await Todo.findByIdAndUpdate(body)
}
const  deleteTask = async(id)=>{
    return await Todo.findByIdAndDelete(id)
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}