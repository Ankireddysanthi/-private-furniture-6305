let home=document.getElementById("nav img")
home.addEventListener("click",()=>{

    window.location.assign("http://127.0.0.1:5500/frontend/index.html")
})
let coat=document.getElementById("coat")
let bag=document.getElementById("bag")
let shoe=document.getElementById("shoe");
coat.addEventListener("click",()=>{
    window.location.assign("coat.html")
})
bag.addEventListener("click",()=>{
    window.location.assign("bag.html")
})
shoe.addEventListener("click",()=>{
    window.location.assign("shoe.html")
})