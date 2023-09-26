import { tabs } from '../constants/index.js';
import { generateTask } from './generateTask.js';
import DB from '../DB/db.js'

const getFilteredTasks = (tasks, filter) => {
	let filteredTasks = [];

	switch (filter) {
		case tabs.TAB_MY_TASKS:
			filteredTasks = tasks.filter((task) => !task.completed);
			break;
		case tabs.TAB_COMPLETED:
			filteredTasks = tasks.filter((task) => task.completed);
			break;
		case tabs.TAB_IMPORTANT:
			filteredTasks = tasks.filter((task) => task.important && !task.completed);
			break;
		default:
			filteredTasks = tasks;
	}
	return filteredTasks
}

const createNewTask = (title) => {
	if (title && title.length) {
		const newTask = generateTask(title);
		DB.push(newTask);
		return DB
	}
};

const updateTask = (tasks, id, props) => {
	const taskToUpdate = tasks.find(task => task.id === id);
	if (taskToUpdate) {
		if (props === tabs.TAB_COMPLETED) {
			taskToUpdate.completed = !taskToUpdate.completed;
		}
		if (props === tabs.TAB_IMPORTANT) {
			taskToUpdate.important = !taskToUpdate.important;
		}
		return taskToUpdate;
	} else {
		return null;
	}
}

export default { getFilteredTasks, createNewTask, updateTask }