const zod = require('zod');


const createTodo =zod.object({
    title:zod.string().optional(),
    description:zod.string().optional(),
})

const updateTodo =zod.object({
    id: zod.string(),

})

module.exports ={
    createTodo: createTodo,
    updateTodo:updateTodo
}