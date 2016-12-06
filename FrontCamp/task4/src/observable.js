export class Observable {
	constructor() {
		this.observers = [];
	}

	subscribe(callback) {
		this.observers.push(callback);
	}

	unsubscribe(callback) {
		let index = this.observers.indexOf(callback);
		this.observers.splice(index, 1);
	}

	notify(data) {
		this.observers.forEach(callback => {
			callback(data);
		});
	}
}