let main=document.getElementById("main")
async function fetchdata(){
     try {
         let res=await fetch("http://localhost:8080/products/shoe");
         let data=await res.json();
         console.log(data);
         display(data)
         
     } catch (error) {
        console.log(error) 
     }
 }
 fetchdata()

 function display(data){
     main.innerHTML=""
     data.forEach(element => {
         let card=document.createElement("div")
         let image=document.createElement("img")
         image.setAttribute("src",element.image[0])
         image.setAttribute("id", "image");
     let category=document.createElement("p");
     category.innerText=element.category;
     let gender=document.createElement("p")
      gender.innerText=element.gender
    //   let image=document.createElement("img")
    //   image.setAttribute("src",element.image[0])
    //   image.setAttribute("id", "image");
      let price=document.createElement("p")
      price.innerText=element.price
      let rating=document.createElement("p")
      rating.innerText=element.rating
 
      let tag=document.createElement("p")
      tag.innerText=element.tag
         
   card.append(image,gender,price,rating);
   main.append(card)


         
     });
 }