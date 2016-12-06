import {TemplateLoader} from './templateLoader';

export class CategoriesPresenter {
    showCategory(category, parent) {
        let loader = new TemplateLoader();
        loader.getHtmlTemplate('templates/category.html')
            .then(data => {
                let li = document.createElement('li');
                li.innerHTML = data
                    .replace(/CATEGORY_ID/, category.id)
                    .replace(/CATEGORY_NAME/g, category.name);
                parent.appendChild(li);
            });
    }

    showCategories(categories) {
        let allCategories = document.getElementById('categories');

        for (let item of categories.sources) {
            this.showCategory(item, allCategories);
        }
    }
}