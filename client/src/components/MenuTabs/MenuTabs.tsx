import tabsStore from '../../store/tabs';
import { tabs } from '../../constants/constants';

import styles from './menutabs.module.sass';
import todo from '../../store/todo';

export const MenuTabs = () => {
	const handleTabClick = (tabName: string) => {
		tabsStore.setTab(tabName)
		todo.fetchTasks(tabsStore.selectedTabs);
	};

	return (
		<>
			<nav className={styles.navigation}>
				<ul className={styles.navigationList}>
					<li className={`${styles.navigationItem} ${tabsStore.selectedTabs === tabs.TAB_MY_TASKS ? styles.active : ''}`} onClick={() => handleTabClick(tabs.TAB_MY_TASKS)}>Мои задачи</li>
					<li className={`${styles.navigationItem} ${tabsStore.selectedTabs === tabs.TAB_COMPLETED ? styles.active : ''}`} onClick={() => handleTabClick(tabs.TAB_COMPLETED)}>Выполненные</li>
					<li className={`${styles.navigationItem} ${tabsStore.selectedTabs === tabs.TAB_IMPORTANT ? styles.active : ''}`} onClick={() => handleTabClick(tabs.TAB_IMPORTANT)}>Важные</li>
				</ul>
			</nav>
		</>
	);
}
