
const express = require("express");
const {createTodo,updateTodo} =require("./types");
const {todo} = require("./db");
const app = express();


app.use(express.json());

app.post("/todo", async function(req, res) {
    const createPayload =req.body;
    const parsedPayload =createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
       return res.status(400).json({
            msg: "You sent the wrong inputssss",
        });

    }
    await todo.create({
        title: createPayload.title,
        description:createPayload.description,
        completed: false
    })
    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});

    res.json({

        todos:[]

    })


})

app.put("/completed", async function(req, res) {
    const updatePayload =req.body;
    const parsedPayload =updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(400).json({
            msg: "You sent the wrong inputs",
        })
        return;

    }
    await todo.update({
        _id:req.body.id //what to update
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
  })

  app.listen(3000);


// write basic express boilerplate code, 
// with express.json() middleware