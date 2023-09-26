import { makeAutoObservable } from 'mobx';
import { ITodoProps } from '../models/ITodoProps';
import todoService  from '../service/handleApi';

class Todo {
  task: ITodoProps[] = [];
  completed: boolean = false;
  important: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setTasks(tasks: ITodoProps[]) {
	this.task = tasks
  }

  async setCompleted(id:string) {
	this.task.find((item) => {		
		if (item.id === id) {
			todoService.updateTask(id,  { completed: !this.completed })
		} 
	})
	return this.completed;
  }

  async setImportant(id:string) {
	this.task.find((item) => {		
		if (item.id === id) {
			todoService.updateTask(id,  { important: !this.important })
		} 
	})
	return this.important;
  }

  async addTodo(title: string) {
    try {
      await todoService.addTodo(title);
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  }

  fetchTasks(tab: string) {
    try {
		todoService.getTodo(tab)
		.then(data => {
			this.setTasks(data)
		})
    } catch (error) {
		console.error('Ошибка при получении задач:', error);
    }
  }
}

export default new Todo();
