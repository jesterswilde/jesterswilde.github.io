const posts = [
'Posts/1_asymmetric.html'
];

document.addEventListener("DOMContentLoaded", ()=>{
    const blogElem = document.getElementById("blog");
    fetch(posts[0]).then((response)=>{
        response.text().then((text)=> blogElem.innerHTML = text); 
    });
});