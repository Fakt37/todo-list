const generateId = () => {
	return Date.now().toString(10) + Math.random().toString(36);
}

export default generateId