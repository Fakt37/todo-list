import { useState } from 'react';

import { ITodoProps } from '../../models/ITodoProps';

import todoStore from '../../store/todo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import styles from './taskitem.module.sass';


const TaskItem = ({ item }: { item: ITodoProps }) => {
	const [showIcon, setShowIcon] = useState(false);

	const itemClassName = `${styles.taskItem} ${item.completed ? styles.completed : ''} ${item.important ? styles.important : ''}`;

	const handleCompleted = (id: string) => {
		todoStore.setCompleted(id)
	}

	const handleImportant = (id: string) => {
		todoStore.setImportant(id)
	}

	return (
		<li
			className={itemClassName}
			key={item.id}
			onMouseEnter={() => setShowIcon(true)}
			onMouseLeave={() => setShowIcon(false)}
		>
			<label className={styles.checkbox}>
				<input
					type="checkbox"
					className={styles.checkboxInput}
					checked={item.completed}
					onChange={() => handleCompleted(item.id)}
				/>
				<span className={styles.checkboxLabel}>{item.title}</span>
			</label>
			<button
				className={styles.important}
				onClick={() => handleImportant(item.id)}
				style={{
					visibility: showIcon || item.important ? 'visible' : 'hidden'
				}}
			>
				<FontAwesomeIcon
					icon={faBolt}
					style={{
						color: item.important ? "#ec5c2b" : "#b2b0b0",
					}}
				/>
			</button>
		</li>
	);
};

export default TaskItem;
