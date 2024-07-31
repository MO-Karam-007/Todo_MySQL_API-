var express = require('express');
var router = express.Router();
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require('../services/factory')

function validation() {
  return (req, res, nxt) => {
    if (!req.body.title || typeof req.body.title !== "string") {
      return res.status(400).json({ error: "Invalid title" });
    }
    if (typeof req.body.completed !== "boolean") {
      return res.status(400).json({ error: "Invalid completed status" });
    }
    nxt();
  };
}
// Routes
router.route('/')
  .get(getTodos)
  .post(validation(), createTodo);

router.route('/:id')
  .get(getTodo)
  .put(validation(), updateTodo)
  .delete(deleteTodo);

module.exports = router;
