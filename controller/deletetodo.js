//delete todo
const Todo = require('../modules/todo');

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Todo deleted"
    });

  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { deleteTodo };