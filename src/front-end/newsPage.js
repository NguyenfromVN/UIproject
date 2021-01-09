import * as API from "../mock-api/mockAPI.js"

let data = null;

const getData = () => {
    if (getQueryParams('v', location.href) === 't')
    {
        data = API.videoData.findById(getQueryParams('id', location.href));
        console.log(data)
    } else {
        data = API.articleData.findById(getQueryParams('id', location.href));
    }
    console.log(data)
    console.log(location.href)
}

const getQueryParams = (params, url) => {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
};

const fillData = () => {
    $("#title").text(data.title)
    $("#author").text(data.author)
    $("#time").text(data.time)
    $("#like").text(`like ${data.like}`)

    let content = data.content;
    content.split(".")

    console.log(content.split("."))
    content.split(".").forEach(c => {
        $("#content").append(`<p class='content-body para'> ${c} </p>`)
    })

    
    if (getQueryParams('v', location.href) === 'f'){
        $("#image").attr("src", data.thumbnail)
        $("#image").css("display", "block");
    } else {
        $("#video").attr("src", data.url)
        $("#video").css("display", "block");
    }

    data.comments.forEach(com => {
        $(".comment").append(`
        <div class = "comment-section row">
                        <div class = "col-sm-1">
                            <img src=${com.avatar} alt="" class="header__right__avatar" />
                        </div>
                        <div class = "col-sm-11">
                            <p>
                                ${com.content}
                            </p>
                        </div>
                    </div>
    `)
    })

}


getData()
fillData()
