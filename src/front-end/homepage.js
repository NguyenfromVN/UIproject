// const hot = document.querySelector(".hot");
// const item = document.createElement('div');
// const img = document.createElement('img');
// const title = document.createElement('div');
// const meta = document.createElement('div');
// const detail = document.createElement('span');
// const detail_refer = document.createElement('span');
// const detail_time = document.createElement('span');
// img.setAttribute("src", "./img/ImageNew.png");
// img.classList.add("hot__item__img");
// title.classList.add("hot__item__title");
// title.innerHTML = "Bộ Lao động chính thức thông báo lịch nghỉ Tết, nghỉ lễ năm 2021-=---sdfasdfsd";
// meta.classList.add("hot__item__meta");
// detail.classList.add("detail");
// detail.innerHTML = "Tuoi tre";
// detail_refer.classList.add("detail");
// detail_refer.innerHTML = "3 lien quan";
// detail_time.classList.add("detail-middle");
// detail_time.textContent = "4 gio";
// meta.appendChild(detail);
// meta.appendChild(detail_time);
// meta.appendChild(detail_refer);
// item.classList.add("hot__item");
// item.appendChild(img);
// item.appendChild(title);
// item.appendChild(meta);
// hot.appendChild(item);



const hot_btn = document.querySelector("#hot");
const news_btn = document.querySelector("#news");
const videos_btn = document.querySelector("#videos");
const cate_btn = document.querySelector("#categories");


const content_hot = document.querySelector(".container-content-hot");
const content_news = document.querySelector(".container-content-news");
const content_video = document.querySelector("#contain-vide");
const content_cate = document.querySelector(".container-cate");


content_news.style.display = "none";
content_video.style.display = "none";
content_cate.style.display = "none";


hot_btn.addEventListener('click', e=>{
    content_hot.style.display = "flex";
    content_news.style.display = "none";
videos_btn.classList.remove("active-btn");
cate_btn.classList.remove("active-btn");
news_btn.classList.remove("active-btn");
hot_btn.classList.add("active-btn");


content_hot.style.display = "flex";
content_news.style.display = "none";
content_video.style.display = "none";
content_cate.style.display = "none";


})

news_btn.addEventListener('click', e=>{
hot_btn.classList.remove("active-btn");
videos_btn.classList.remove("active-btn");
cate_btn.classList.remove("active-btn");
news_btn.classList.add("active-btn");
content_hot.style.display = "none";
content_news.style.display = "flex";
content_video.style.display = "none";
content_cate.style.display = "none";

})

videos_btn.addEventListener('click', e=>{
    hot_btn.classList.remove("active-btn");
    news_btn.classList.remove("active-btn");
    cate_btn.classList.remove("active-btn");
    videos_btn.classList.add("active-btn");
    content_hot.style.display = "none";
    content_news.style.display = "none";
    content_video.style.display = "grid";
content_cate.style.display = "none";
    
    })

    
    cate_btn.addEventListener('click', e=>{
    hot_btn.classList.remove("active-btn");
    news_btn.classList.remove("active-btn");
    videos_btn.classList.remove("active-btn");
    cate_btn.classList.add("active-btn");
    content_hot.style.display = "none";
    content_news.style.display = "none";
    content_video.style.display = "none";
content_cate.style.display = "grid";
    
    })













