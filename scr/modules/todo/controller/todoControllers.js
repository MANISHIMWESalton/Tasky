import todoRepositories from "../repository/todoRepositories";

const createTask = async(req,res)=>{
    try {
        const createTask = await todoRepositories.createTask(req.body)
        res.status(200).json({message:"task created successfully"})
    } catch (error) {
        res.status(500).json({message:"error"})
    }
}
const getTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const getTask =  await todoRepositories.getTask(id)
        res.status(200).json({message:"Task got successfully"})
    } catch (error) {
        res.status(500).json({message:"error"})  
    }
}
const getTasks = async(req,res)=>{
try {
    const getTasks = await todoRepositories.getTasks()
    res.status(200).json({message:"Tasks get successfully"})
} catch (error) {
    res.status(500).json({message:"error"})
}
}

const updateTask = async(req,res)=>{
try {
   const {id} = req.params;
   const updateTask = await todoRepositories.updateTask(req.body,id ,{new:true})
   res.status(200).json({message:"Tasks updated successfully"})
} catch (error) {
    res.status(500).json({message:"error"})
}
}
const deleteTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTask =  await todoRepositories.deleteTask(id)
        res.status(200).json({message:"Tasks deleted successfully"})
    } catch (error) {
    res.status(500).json({message:"error"})
    }
}

export default{
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}