const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://khuranaraghav388:8SG1rAHqUzgu2Xa0@cluster0.t7uq0jp.mongodb.net/todo_app")
const todoSchema =mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo =mongoose.model('todos',todoSchema);

module.exports ={
    
}