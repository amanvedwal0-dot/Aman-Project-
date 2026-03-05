//createtodo.js
const Todo = require("../modules/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    const newTodo = await Todo.create({
      title,
      description,
      dueDate,
    });

    res.status(200).json({
      success: true,
      data: newTodo,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};