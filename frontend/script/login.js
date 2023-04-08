let home=document.getElementById("nav img")
home.addEventListener("click",()=>{

    window.location.assign("index.html")
})


let signupbtn = document.getElementById("signupbtn")
let signup = document.getElementById("signup")
// let signup1 = document.getElementById("signup1")
let signin=document.getElementById("signin")
//************************signup******************* */
signupbtn.addEventListener("click", () => {
    window.location.href="signup.html"
})
// signup1.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let username = document.getElementById("name")
//     let email = document.getElementById("email")
//     let pass = document.getElementById("password")
//     let number = document.getElementById("number");
//     let obj = {
//         username: username.value,
//         email: email.value,
//         pass: pass.value,
//         mobilenumber: number.value
//     }
//     // console.log(obj)


//     let a = obj.username
//     console.log(a)
//     fetch("http://localhost:8080/user/reg", {
//         method: "POST",
//         headers: { "Content-type": "application/json" },
//         body: JSON.stringify(obj)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.msg)
//             if (data.msg == "already exit") {
//                 alert("email already exit pls login");


//             }
//             localStorage.setItem("userName", data.userName)
//             if (data.msg == "registration success") {
//                 alert(`${a} Registraion Success Please Login to Continue`)
//                 signup1.style.display="none"

//             }

//         })
//         .catch(err => console.log(err));
// })
//**************-login****************************/

// let form=document.getElementById("form");
    let email1=document.getElementById("email1")
    let pass1=document.getElementById("pass1");
      signin.addEventListener("submit",(e)=>{
        e.preventDefault();
        let obj={
            email:email1.value,
            pass:pass1.value
        }
        let b=obj
    console.log(obj)
       fetch("https://thoughtful-elk-sun-hat.cyclic.app/user/login",{
        method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(obj)
       })
       .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.msg == "login"){
                localStorage.setItem("token", data.token)
                localStorage.setItem("username", data.username)
                alert(`Hello ${data.username} welcome to burberry`)
                window.location.assign("index.html")
                 form.reset()
                }
                else alert("Wrong Credentials")
            })
            .catch(err => console.log(err));       
        // return false;

    })