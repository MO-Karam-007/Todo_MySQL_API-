const { qurey } = require('../config/db')


exports.getTodos = async (req, res) => {
    const doc = await qurey('SELECT * FROM tasks',);
    res.json(doc);
}

exports.getTodo = async (req, res) => {
    const { id } = req.params
    const doc = await qurey('SELECT * FROM tasks where id = ?', [id]);
    res.json(doc);
}

exports.createTodo = async (req, res) => {
    const { title, completed } = req.body;

    const doc = await qurey('INSERT INTO tasks (title,completed) VALUES (?,?)', [title, completed]);
    res.json(doc);
}

exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const doc = await qurey('UPDATE tasks SET title = ?, completed = ? WHERE id = ?'
        , [title, completed, id]);
    res.json(doc);

}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;

    const doc = await qurey('DELETE FROM tasks WHERE id = ?'
        , [id]);
    res.json(doc);

}