import { URL } from "../constants/constants";

import todoStore from "../store/todo";
import tabsStore from "../store/tabs";

interface IDataProps {
  completed?: boolean;
  important?: boolean;
}

const getTodo = async ( tab: string) => {
  try {
    const response = await fetch(`${URL}/tasks/${tab}`);
    if (!response.ok) {
      console.error('Ошибка при получении данных с сервера');
      return;
    }
	
    const data = await response.json();
    return todoStore.task = data

  } catch (error) {
    console.error('Ошибка:', error);
  }
};

const addTodo = async (title: string) => {
  try {
    const response = await fetch(`${URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    const data = await response.json();	
    return data;
  } catch (error) {
    console.error('Ошибка при отправке данных на сервер:', error);
  }
};

const updateTask = async (id: string, updateData: IDataProps) => {
  try {
    await fetch(`${URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });
	todoStore.fetchTasks(tabsStore.selectedTabs);
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
  }
};

export default { getTodo, addTodo, updateTask };
