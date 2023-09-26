import DB from '../DB/db.js'
import services from '../services/taskService.js';

const getTasks = (req, res) => {
	const { tab } = req.params;
	return res.json(services.getFilteredTasks(DB, tab));
}

const createTask = (req, res) => {
	const { title } = req.body
	return res.json(services.createNewTask(title))
}

const updateTask = (req, res) => {
	const { id } = req.params;
	const { completed, important } = req.body;
	const fieldToUpdate = completed ? 'completed' : important ? 'important' : null;

	const updatedTask = services.updateTask(DB, id, fieldToUpdate);
	if (updatedTask) {
		return res.status(200).json(updatedTask);
	} else {
		return res.status(400).json({ error: 'Задача не найдена' });
	}
};

export default { getTasks, createTask, updateTask }