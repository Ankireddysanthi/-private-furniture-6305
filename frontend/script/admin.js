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
   fetch("http://localhost:8080/admin/login",{
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