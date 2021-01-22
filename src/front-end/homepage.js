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
const content_cate_popup = document.querySelector("#cate-popup");


const hot_content = document.querySelector(".hot");
const new_content = document.querySelector("#new_home");
const all_time = document.querySelector("#all-time_home");
const new_home = document.querySelector("#news-content")
const all_time_home = document.querySelector("#all-time-home");


const testClick = (id, type) =>{
    console.log(id);
    if (!type)
        location.href = `./newsPage.html?id=${id}&v=f`;
    else
        location.href = `./newsPage.html?id=${id}&v=t`;
}



const getQueryParams = (params, url) => {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
};

const search_content = document.querySelector("#body-search")
const fill_search = ()=>{
    API.articleData.search(getQueryParams('q', location.href)).forEach(element=>{
        const item = document.createElement('div');
        item.classList.add("video__item");
        item.onclick = function(){
            testClick(element.id);
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
        search_content.appendChild(item);
    })
}

fill_search()


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
                testClick(element.id, "v");
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

const cate_content = document.querySelector("#cate-container");

const showPopupCategory = (element) => {

    const item = document.createElement('div');
    item.innerHTML = `<div class="title"">
            <img src="./img/Logo.png" class="title__logo">
            <span class="title__text">${element}</span>
            <img src="./img/Star.png" class="title__logo">
            <span class="close" id = "cls-btn">&times;</span>
            <div id = "contain-popup-item" class = "wrapper"></div>
        </div>`
    content_cate_popup.innerHTML = `<div class="modal-content">
        </div>`
    document.querySelector(".modal-content").appendChild(item)
    API.categoryData.getAllNewsByCategory(element).forEach(element=>{
        const item1 = document.createElement('div');
        item1.classList.add("cate__item");
        item1.innerHTML = `<img src="${element.thumbnail}" alt="" class="cate__item__img">
            <div class="cate__item____content">
                <div class="cate__item__title">
                ${element.title}
                </div>
                <div class="cate__item__meta">
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
            </div>`
        item1.onclick = function(){
            testClick(element.id);
        }
        document.querySelector("#contain-popup-item").appendChild(item1);
    })



    content_cate_popup.style.display = "block"
    document.querySelector("#cls-btn").onclick = () => {
        content_cate_popup.style.display = "none"
    }
}

const fill_cate = ()=>{
    const cate_data  = ["Thời sự",
    "Giao thông",
    "Sức khỏe",
    "Kinh tế", "Nghệ thuật",
    "Ẩm thực",
    "Du lịch",
    "Giải trí",
    "Thể thao",
    "Chính trị",
    "Khoa học"]
    cate_data.forEach(element => {
        const item = document.createElement('div');
            item.classList.add("container-cate__content");
            item.innerHTML = `<div class="title"">
            <img src="./img/Logo.png" class="title__logo">
            <span class="title__text">${element}</span>
            <img src="./img/Star.png" class="title__logo">
        </div>`
        API.categoryData.getAllNewsByCategory(element).forEach(element=>{
            const item1 = document.createElement('div');
            item1.classList.add("cate__item");
            item1.innerHTML = `<img src="${element.thumbnail}" alt="" class="cate__item__img">
            <div class="cate__item____content">
                <div class="cate__item__title">
                ${element.title}
                </div>
                <div class="cate__item__meta">
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
            </div>`
            item1.onclick = function(){
                testClick(element.id);
            }
        item.appendChild(item1);
        })
        item.onclick = () => {
            showPopupCategory(element)
        }
        if(API.categoryData.getAllNewsByCategory(element).length===0){
            item.style.display = "none"
        }

        cate_content.appendChild(item)
        });

}

const search_form = document.querySelector("#search-form")
search_form.addEventListener('submit', e=>{
    const body = document.querySelector("#body")
    content_news.style.display = "none";
    content_video.style.display = "none";
    content_cate.style.display = "none";
    content_hot.style.display = "none";
})

fill_cate();
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


















