let url = "http://github.com/carbonfive/raygun"

function getUrl(url){
    return url.split(/\/+/)[1];

}
console.log(getUrl(url))