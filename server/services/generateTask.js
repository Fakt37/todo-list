import generateId from "./generateId.js";

export const generateTask = (title) => {
	return {
		id: generateId(),
		title: title,
		completed: false,
		important: false,
	};
}

export default { generateTask }