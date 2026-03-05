// //get todo
// const Todo = require('../modules/todo');

// const gettTodo = async (req, res) => {
//   try {

//     const now = new Date();

//     // Mark overdue
//     await Todo.updateMany(
//       { dueDate: { $lt: now }, status: 'pending' },
//       { status: 'overdue' }
//     );

//     const todos = await Todo.find().sort({ dueDate: 1 });

//     res.status(200).json({
//       success: true,
//       data: todos
//     });

//   } catch (error) {
//     console.error("Get Error:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// module.exports = { gettTodo };




const Todo = require('../modules/todo');

const gettTodo = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ dueDate: 1 });
    const now = new Date();

    // Transform data: logic for 'overdue' happens here for the UI
    const updatedTodos = todos.map(todo => {
      if (todo.status === 'pending' && new Date(todo.dueDate) < now) {
        todo.status = 'overdue';
      }
      return todo;
    });

    res.status(200).json({
      success: true,
      data: updatedTodos
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { gettTodo };