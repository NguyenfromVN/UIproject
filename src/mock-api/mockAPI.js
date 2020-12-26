import data from './data.js';

const articleData=(function(){
    const aritcles=data.articles;

    function getAll(){
        return aritcles;
    }

    function getByCategory(category){
        let arr=articles.map(article=>{
            if (article.category==category)
                return article;
        })
        return arr;
    }

    function search(query){
        let arr=articles.map(article=>{
            if (article.title.search(query)!=-1)
                return article;
        })
        return arr;
    }

    function findById(id){
        let articles;
        articles.forEach(x=>{
            if (x.id==id)
                article=x;
        })
        return article;
    }

    function getAllByCategory(category){
        return articles.map(article=>{
            if (article.category==category)
                return article;
        })
    }

    return {
        getAll,
        getByCategory,
        search,
        findById,
        getAllByCategory
    }
})();

const videoData=(function(){
    const videos=data.videos;

    function getAll(){
        return videos;
    }

    function search(query){
        return videos.map(video=>{
            if (video.title.search(query)!=-1)
                return video;
        })
    }

    return {
        getAll,
        search
    }
})();

const publisherData=(function(){
    const publishers=data.publishers;

    function getAll(){
        return publishers;
    }

    function search(query){
        return publishers.map(publisher=>{
            if (publisher.name.search(query)!=-1)
                return publisher
        })
    }

    return {
        getAll,
        search
    }
})();

const userData=(function(){
    const user=data.user;

    function getProfile(){
        return user;
    }

    function subscribePublisher(publisherName){
        user.following.push(publisherName);
    }

    function commentOnNews(content, articleId){
        let current=new Date()+'';
        let time='';
        for (let i=4; i<24; i++)
            time+=current[i];
        const article=articleData.findById(articleId);
        article.comments.push({
            author:user.username,
            content,
            avatar: user.avatar,
            time
        });
    }

    function addCategory(category){
        user.categories.push(category);
    }

    function likeNews(articleId){
        const article=articleData.findById(articleId);
        article.like+=1;
    }

    return {
        getProfile,
        subscribePublisher,
        commentOnNews,
        addCategory,
        likeNews
    }
})();

const categoryData=(function(){
    const categories=data.categories;

    function getAll(){
        return categories;
    }

    function getAllNewsByCategory(category){
        return articleData.getAllByCategory(category);
    }

    return {
        getAll,
        getAllNewsByCategory
    }
})();

export {
    articleData,
    videoData,
    publisherData,
    userData,
    categoryData
};