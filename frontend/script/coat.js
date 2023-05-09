let main=document.getElementById("main")
let count = document.getElementById("count")
let home=document.getElementById("nav img")
let coat=document.getElementById("coat")
coat.addEventListener("click",()=>{
  window.location.assign("cartcoat.html")
})
home.addEventListener("click",()=>{

    window.location.assign("http://127.0.0.1:5501/-private-furniture-6305/frontend/index.html")
})
let arr =  []
let c = 0;
async function fetchdata(){
     try {
         let res=await fetch("https://thoughtful-elk-sun-hat.cyclic.app/products/coat");
         let data=await res.json();
         console.log(data);
         display(data)
         
     } catch (error) {
        console.log(error) 
     }
 }
 fetchdata()

 function display(data){
 // event.preventDefault()
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
      let button=document.createElement("button");
       button.innerHTML="Buy"
       
       button.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(element._id)
              // if (checkduplicate(element._id)) {
                arr.push(element);
                 let c1=0;
                for(let i=0;i<arr.length;i++){
                  if(element._id==arr[i]._id){
                    c1++
                    
                  }
                }
                if(c1>1){
                  alert("product already added")
                }else{
                  alert("product added")
                 localStorage.setItem("coat", JSON.stringify(arr));
                
                }
                console.log(c1)
              //  console.log(arr)
              //   c++
              //   count.innerText = c;
              //   console.log(element._id)
        
                // localStorage.setItem("key", JSON.stringify(arr));
              //   alert("added successfully");
              // } else {
              //   alert("product already added")
              // }
              //  checkduplicate(element._id)
              // console.log(element._id)
              // arr.push(element)
              // c++
              // count.innerText=c
              // localStorage.setItem("key",JSON.stringify(arr))
            })
 
      let tag=document.createElement("p")
      tag.innerText=element.tag
         
   card.append(image,gender,price,rating,button);
   main.append(card)


         
     });
//      function checkduplicate(ele) {

//         for (let e in arr) {
//           if (e._id === ele) {
//             return false;
//           }
//           return true;
//         }
//       }
 }