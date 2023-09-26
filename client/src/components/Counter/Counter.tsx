import { observer } from 'mobx-react-lite';
import todo from '../../store/todo';
import styles from './counter.module.sass';

export const Counter = observer(() => {
	return (
		<>
			<span className={styles.counter}>Задач: {todo.task.length}</span>
		</>
	);
})
