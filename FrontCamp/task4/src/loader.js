export class Loader {
    load(requestString) {
        let request = new Request(requestString);
        let init = { method: 'GET'};

        return fetch(request, init)
            .then(response => response.json())
            .catch(error => console.log('error: ' + error));
    }
}