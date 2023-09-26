import { TitleApp } from '../components/TitleApp';
import { Header } from '../components/Header';
import { MenuTabs } from '../components/MenuTabs';
import { TaskList } from '../components/TaskList';
import { AddTask } from '../components/AddTask';
import { Counter } from '../components/Counter';

import { BY_NAME } from '../constants/constants';

import './App.sass';

const App = () => {
	return (
		<>
			<Header>
				<TitleApp name={BY_NAME} />
				<Counter />
			</Header>
			<main className='main'>
				<MenuTabs />
				<div className='main-content'>
					<AddTask />
					<TaskList />
				</div>
			</main>
		</>
	)
}

export default App
