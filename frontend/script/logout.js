let home=document.getElementById("nav img")
home.addEventListener("click",()=>{

    window.location.assign("index.html")
})

let logout=document.getElementById("logout");
username=localStorage.getItem("username");
document.getElementById("name").innerText=` WELCOME ${username}`
  
logout.addEventListener("click",()=>{
 localStorage.removeItem("token");
localStorage.removeItem("username"); 

})