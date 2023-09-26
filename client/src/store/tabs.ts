import { makeAutoObservable } from "mobx";

class Tabs {
	selectedTabs: string = 'myTasks'
	constructor() {
		makeAutoObservable(this)
	}

	setTab(tab: string) {
		this.selectedTabs = tab	
	}
}

export default new Tabs()