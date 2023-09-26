import { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import TaskItem from '../TaskItem/TaskItem';

import todo from '../../store/todo';
import tabs from '../../store/tabs';

import styles from './tasklist.module.sass';

export const TaskList = observer(() => {
	const fetchTasks = useCallback(() => {
		todo.fetchTasks(tabs.selectedTabs);
	}, []);

	useEffect(() => {
		fetchTasks();
	}, [fetchTasks]);

	return (
		<>
			<ul className={styles.taskList}>
				{todo.task.map((item) =>
				(
					<TaskItem key={item.id} item={item} />
				))}
			</ul>
		</>
	);
}) 
