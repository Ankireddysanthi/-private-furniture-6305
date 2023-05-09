let data=JSON.parse(localStorage.getItem("bag"))||[];
let bagcart=document.getElementById("bag")
let main=document.getElementById("main")
console.log(data)
display()
function display() {
    main.innerHTML = ""
    data.forEach((element,index) => {
      let card = document.createElement("div")
      let image = document.createElement("img")
      image.setAttribute("src", element.image[0])
      image.setAttribute("id", "image");
      let category = document.createElement("p");
      category.innerText = element.category;
      let gender = document.createElement("p")
      gender.innerText = element.gender
      let price = document.createElement("p")
      price.innerText = `$ ${element.price}`
      let rating = document.createElement("p")
      rating.innerText = element.rating
      let button = document.createElement("button");
      button.innerHTML = "Remove"
      button.addEventListener("click",()=>{
        data= data.filter((el,i)=>{
            if((index==i)){
                alert("product deleted")
                return false;
              //  alert("product deleted")
            }else{
                return true;
            }
        })
        localStorage.setItem("bag",JSON.stringify(data));
        display();
      })
      card.append(image, gender, price, rating,button);
      main.append(card)
    });
}