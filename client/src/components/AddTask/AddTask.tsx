import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import todoStore from '../../store/todo';
import tabsStore from '../../store/tabs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './addtask.module.sass';



export const AddTask = observer(() => {
	const [text, setText] = useState('')

	const handleAddTodo = () => {
		if (text.trim() !== '') {
			todoStore.addTodo(text)
			setText('')
			todoStore.fetchTasks(tabsStore.selectedTabs)
		}

	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleAddTodo();
			setText('')
		}
	};

	return (
		<>
			<div className={styles.addTaskWrapper}>
				<input
					className={styles.addTask}
					type="text"
					placeholder='Введите текст новой задачи'
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={handleKeyPress}
				/>
				<button
					className={styles.addTaskBtn}
					onClick={handleAddTodo}
				>
					<FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
				</button>
			</div>
		</>
	);
});
