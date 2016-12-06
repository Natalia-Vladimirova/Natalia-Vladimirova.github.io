import { CategoriesPresenter } from './categoriesPresenter';
import { NewsPresenter } from './newsPresenter';

export class PresenterFactory {
	constructor() {
		this.presenters = new Map();
	}

	static getInstance() {
		if (!PresenterFactory.instance) {
			PresenterFactory.instance = new PresenterFactory();
		}

		return PresenterFactory.instance;
	}

	getPresenter(key) {
		let presenter = this.presenters.get(key);

		if (presenter === undefined) {
			switch (key) {
				case 'CategoriesPresenter':
					presenter = new CategoriesPresenter();
					break;
				case 'NewsPresenter':
					presenter = new NewsPresenter();
					break;
			}

			if (presenter === undefined) {
				throw `There is no presenter for key '${key}'`;
			}
			else {
				this.presenters.set(key, presenter);
			}
		}

		return presenter;
	}
}