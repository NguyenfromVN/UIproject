import data from './data.js';

const articleData=(function(){
    const aritcles=data.articles;

    // getAll()

    // getByCategory(category)

    // search(query)

})();

const videoData=(function(){
    const videos=data.videos;

    // getAll()

    // search(query)

})();

const publisherData=(function(){
    const publishers=data.publishers;

    // getAll()

    // search(query)

})();

const userData=(function(){
    const user=data.user;

    // getProfile()

    // subscribePublisher(publisher)

    // commentOnNews(title)

    // addCategory(category)

    // likeNews(title)

})();

const categoryData=(function(){
    const categories=data.categories;

    // getAll()

    // getAllNewsByCategory(category)

})();

export {
    articleData,
    videoData,
    publisherData,
    userData,
    categoryData
};