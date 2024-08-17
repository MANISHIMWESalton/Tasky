const todoRepositories =  require ("../repository/todoRepositories");

const  createTask = async(req,res)=>{
    try {
        const  createTask = await todoRepositories.createTask(req.body)
        res.status(200).json({message:"task created successfully",data:{createTask}})
    } catch (error) {
        res.status(500).json({message:"error"})
    }
}
const  getTask = async(req,res)=>{
    try {
        const  {id} = req.params;
        const  getTask =  await todoRepositories.getTask(id)
        res.status(200).json({message:"Task got successfully",data:{getTask}})
    } catch (error) {
        res.status(500).json({message:"error"})  
    }
}
const  getTasks = async(req,res)=>{
try {
    const  getTasks = await todoRepositories.getTasks()
    res.status(200).json({message:"Tasks get successfully",data:{getTasks}})
} catch (error) {
    res.status(500).json({message:"error"})
}
}

const  updateTask = async(req,res)=>{
try {
    const  {id} = req.params;
    const  updateTask = await todoRepositories.updateTask(id,req.body,{new:true})
    console.log(updateTask);
   res.status(200).json({message:"Tasks updated successfully",data:{updateTask}})
} catch (error) {
    res.status(500).json({message:error.message})
}
}
const  deleteTask = async(req,res)=>{
    try {
        const  {id} = req.params;
        const  deleteTask =  await todoRepositories.deleteTask(id)
        res.status(200).json({message:"Tasks deleted successfully",data:{deleteTask}})
    } catch (error) {
    res.status(500).json({message:"error"})
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}