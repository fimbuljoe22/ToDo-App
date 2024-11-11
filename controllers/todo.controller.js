const ToDoModel = require('../models/todo.model')

exports.createToDo = (req, res, next) => {
    const createdModel = ToDoModel.create(req.body)
    res.status(201).json(createdModel)
}