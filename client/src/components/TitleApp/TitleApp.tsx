import { ITitleAppProps } from '../../models/ITitleAppProps';
import styles from './title-app.module.sass'

export function TitleApp({ name }: ITitleAppProps) {
	return (
		<>
			<div className={styles.titleWrapper}>
				<h1 className={styles.titleApp}>Менеджер Задач</h1>
				<span className={styles.subtitleApp}>by {name}</span>
			</div>
		</>
	);
}