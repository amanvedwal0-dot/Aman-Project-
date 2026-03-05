// rtodo.js
const express = require('express');
const router = express.Router();

const { createTodo } = require('../controller/createtodo');
const { deleteTodo } = require('../controller/deletetodo');
const { gettTodo } = require('../controller/gettTodo');   // ✅ EXACT NAME
const { updateTodo } = require('../controller/updateTodo'); // ✅ EXACT NAME

router.post('/todos', createTodo);
router.get('/todos', gettTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;