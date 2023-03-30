let home=document.getElementById("nav img")
home.addEventListener("click",()=>{

    window.location.assign("index.html")
})
let signup1 = document.getElementById("signup1")
signup1.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("name")
    let email = document.getElementById("email")
    let pass = document.getElementById("password")
    let number = document.getElementById("number");
    let obj = {
        username: username.value,
        email: email.value,
        pass: pass.value,
        mobilenumber: number.value
    }
    // console.log(obj)


    let a = obj.username
    console.log(a)
    fetch("http://localhost:8080/user/reg", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.msg)
            if (data.msg == "already exit") {
                alert("email already exit pls login");
                window.location.assign("sigin.html")


            }
            localStorage.setItem("userName", data.userName)
            if (data.msg == "registration success") {
                alert(`${a} Registraion Success Please Login to Continue`)
                window.location.href="../html/sigin.html"
                window.location.assign("sigin.html")
                signup1.style.display="none"

            }

        })
        .catch(err => console.log(err));
})