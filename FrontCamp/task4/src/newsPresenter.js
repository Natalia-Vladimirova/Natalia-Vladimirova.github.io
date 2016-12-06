import {Observable} from './observable';
import {TemplateLoader} from './templateLoader';

export class NewsPresenter extends Observable {
    showNews(news, loader) {
        let description = news.description ? news.description : '';
        let author = news.author ? 'Author: ' + news.author : '';
        let publishedAt = news.publishedAt ? 'Published at: ' + news.publishedAt : '';

        loader.getHtmlTemplate('templates/news.html')
            .then(data => {
                let result = data
                    .replace(/NEWS_URL/, news.url)
                    .replace(/NEWS_TITLE/, news.title)
                    .replace(/NEWS_AUTHOR/, author)
                    .replace(/NEWS_PUBLISHEDAT/, publishedAt)
                    .replace(/NEWS_URLTOIMAGE/, news.urlToImage)
                    .replace(/NEWS_DESCRIPTION/, description);

                this.notify(result);
            });
    }

    showAllNews(news, header) {
        let loader = new TemplateLoader();
        loader.getHtmlTemplate('templates/newsHeader.html')
            .then(data => {
                let resultData = data.replace(/NEWS_HEADER/, header);
                this.notify(resultData);

                for (let item of news.articles) {
                    this.showNews(item, loader);
                }
            });
    }
}
