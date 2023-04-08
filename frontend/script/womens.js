let main=document.getElementById("main")
async function fetchdata(){
     try {
         let res=await fetch("https://thoughtful-elk-sun-hat.cyclic.app/products/all");
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
     let category=document.createElement("p");
     category.innerText=element.category;
     let gender=document.createElement("p")
      gender.innerText=element.gender
      image.setAttribute("id", "image");
      let price=document.createElement("p")
      price.innerText=element.price
      let rating=document.createElement("p")
      rating.innerText=element.rating
 
      let tag=document.createElement("p")
      tag.innerText=element.tag
         
   card.append(category,gender,image,price,rating,tag);
   main.append(card)


         
     });
 }