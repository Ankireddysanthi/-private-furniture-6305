let acc=document.getElementById("acc");
const username=localStorage.getItem("username");
acc.addEventListener("click",()=>{
    if(username){
        window.location.href="../html/logout.html"
        // acc.style.display="none"
        // acc.innerText=username
        // log.style.display="block"
    }else{
        window.location.href="../html/sigin.html"
    }



  //  window.location.href="../html/sigin.html"
})
// let log=document.getElementById("log");
// //const username=localStorage.getItem("username");
// console.log(username)
// if(username){
//     // acc.style.display="none"
//     // acc.innerText=username
//     // log.style.display="block"
// }
// log.addEventListener("click",()=>{
//     document.getElementById("login").innerText="Log in"
// localStorage.removeItem("token");
// localStorage.removeItem("username");
// log.style.display="none";

// }) 
