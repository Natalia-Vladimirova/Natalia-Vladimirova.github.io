import {TemplateLoader} from './templateLoader';

export class NewsPresenter {
    showNews(news, parent, loader) {
        let description = news.description ? news.description : '';
        let author = news.author ? 'Author: ' + news.author : '';
        let publishedAt = news.publishedAt ? 'Published at: ' + news.publishedAt : '';

        loader.getHtmlTemplate('templates/news.html')
            .then(data => {
                let div = document.createElement('div');
                div.className = 'news';
                div.innerHTML = data
                    .replace(/NEWS_URL/, news.url)
                    .replace(/NEWS_TITLE/, news.title)
                    .replace(/NEWS_AUTHOR/, author)
                    .replace(/NEWS_PUBLISHEDAT/, publishedAt)
                    .replace(/NEWS_URLTOIMAGE/, news.urlToImage)
                    .replace(/NEWS_DESCRIPTION/, description);
                parent.appendChild(div);
            });
    }

    showAllNews(news, header) {
        let loader = new TemplateLoader();
        loader.getHtmlTemplate('templates/newsHeader.html')
            .then(data => {
                let allNews = document.getElementById('allNews');
                allNews.innerHTML = data.replace(/NEWS_HEADER/, header);

                for (let item of news.articles) {
                    this.showNews(item, allNews, loader);
                }
            });
    }
}
