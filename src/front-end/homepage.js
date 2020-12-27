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
import * as API from "../mock-api/mockAPI.js"





const hot_btn = document.querySelector("#hot");
const news_btn = document.querySelector("#news");
const videos_btn = document.querySelector("#videos");
const cate_btn = document.querySelector("#categories");


const content_hot = document.querySelector(".container-content-hot");
const content_news = document.querySelector(".container-content-news");
const content_video = document.querySelector("#contain-vide");
const content_cate = document.querySelector(".container-cate");


const hot_content = document.querySelector(".hot");
const new_content = document.querySelector("#new_home");
const all_time = document.querySelector("#all-time_home");
const new_home = document.querySelector("#news-content")
const all_time_home = document.querySelector("#all-time-home");


const testClick = (id) =>{
    console.log(id);
    location.href = `./newsPage.html?id=${id}`;
}

const fill_hot = () =>{
    API.articleData.getAll().forEach(element => {
    const item = document.createElement('div');
        item.classList.add("hot__item")
        item.onclick = function(){
            testClick(element.id);
        }
        item.innerHTML = `<img src="${element.thumbnail}" alt="" class="hot__item__img"><div class="hot__item__title">
            ${element.title}
        </div>
        <div class="hot__item__meta">
            <span class="detail">
                ${element.author}
            </span>
            <span class="detail-middle">
                ${element.time}
            </span>
            <span class="detail">
                3 liên quan
            </span>
        </div>`
        hot_content.appendChild(item);
    });
}

const fill_new = () =>{
    API.articleData.getAll().forEach(element => {
    const item = document.createElement('div');
        item.classList.add("new__item");
        item.onclick = function(){
            testClick(element.id);
        }
        item.innerHTML = `<img src="${element.thumbnail}" alt="" class="hot__item__img">
        <div class="new__item__title">
            ${element.title}
        </div>
        <div class="new__item__meta">
            <span class="detail">
                ${element.author}
            </span>
            <span class="detail-middle">
                ${element.time}
            </span>
            <span class="detail">
                3 liên quan
            </span>
        </div>`
        new_content.appendChild(item);
    });
}

const fil_all_time = ()=>{
    API.articleData.getAll().forEach(element => {
        const item = document.createElement('div');
            item.classList.add("all-time__item");
            item.onclick = function(){
                testClick(element.id);
            }
            item.innerHTML = `<img src="${element.thumbnail}" alt="" class="hot__item__img">
            <div class="all-time__item__title">
                ${element.title}
            </div>
            <div class="all-time__item__meta">
                <span class="detail">
                    ${element.author}
                </span>
                <span class="detail-middle">
                    ${element.time}
                </span>
                <span class="detail">
                    3 liên quan
                </span>
            </div>`
            all_time.appendChild(item);
        });
}

const fil_news_content = ()=>{
    API.articleData.getAll().forEach(element => {
        const item = document.createElement('div');
            item.classList.add("new__item");
            item.onclick = function(){
                testClick(element.id);
            }
            item.innerHTML = `
            <img src="${element.thumbnail}" alt="" class="new__item__img">
            <div class="new__item____content">
                <div class="new__item__title">
                    ${element.title}
                </div>
                <div class="new__item__meta">
                    <span class="detail">
                        ${element.author}
                    </span>
                    <span class="detail-middle">
                        ${element.time}
                    </span>
                    <span class="detail">
                        3 liên quan
                    </span>
                </div>
            </div>
        `
            new_home.appendChild(item);
        });
}


const fil_all_time_home = ()=>{
    API.articleData.getAll().forEach(element => {
        const item = document.createElement('div');
            item.classList.add("all-time__item");
            item.onclick = function(){
                testClick(element.id);
            }
            item.innerHTML = `<img src="${element.thumbnail}" alt="" class="all-time__item__img">
            <div class="all-time__item__title">
                ${element.title}
            </div>
            <div class="all-time__item__meta">
                <span class="detail">
                    ${element.author}
                </span>
                <span class="detail-middle">
                    ${element.time}
                </span>
                <span class="detail">
                    3 liên quan
                </span>
            </div>`
            all_time_home.appendChild(item);
        });
}

const video_content = document.querySelector(".container-content-video");

const fil_all_video = ()=>{
    API.videoData.getAll().forEach(element => {
        const item = document.createElement('div');
            item.classList.add("video__item");
            item.onclick = function(){
                testClick(element.title);
            }
            item.innerHTML = `<img src="${element.thumbnail}" alt="" class="video__item__img">
            <div class="video__item__title">
                ${element.title}
            </div>
            <div class="video__item__meta">
                <span class="detail">
                    ${element.author}
                </span>
                <span class="detail-middle">
                    ${element.time}
                </span>
                <span class="detail">
                    3 liên quan
                </span>
            </div>`
            video_content.appendChild(item);
        });
}


fill_hot();
fill_new();
fil_all_time();
fil_news_content();
fil_all_time_home();
fil_all_video();


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


    
    














