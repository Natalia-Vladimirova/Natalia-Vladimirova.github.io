export class TemplateLoader {
    getHtmlTemplate(path) {
        return fetch(path)
            .then(response => response.text())
            .catch(error => console.log('error: ' + error));
    }
}
