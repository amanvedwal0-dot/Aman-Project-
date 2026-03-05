const Todo = require('../modules/todo');

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    let updateData = { ...req.body };
    const now = new Date();

    // 1. Check if the user is providing a new dueDate
    if (updateData.dueDate) {
      const newDate = new Date(updateData.dueDate);

      // 2. If the new date is in the future AND it's not already 'completed'
      // reset the status to 'pending' so it's no longer 'overdue'
      if (newDate > now && updateData.status !== 'completed') {
        updateData.status = 'pending';
      } 
      // 3. If the new date is in the past, mark it 'overdue'
      else if (newDate < now && updateData.status !== 'completed') {
        updateData.status = 'overdue';
      }
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json({
      success: true,
      data: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { updateTodo };