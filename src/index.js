//global storage
let objGlobal;

document.addEventListener("DOMContentLoaded",()=>{    
    displayMenu()

})

const displayMenu= async ()=>{    
    const ramens = await fetchData();
    console.log(ramens)
    
    const ramenMenu = document.querySelector("#ramen-menu")
    console.log(ramenMenu)
    ramens.map(ramen=>{    
        //create the image tag    
        const img= document.createElement("img")
        img.setAttribute("src", ramen.image)
        img.addEventListener("click",()=>{
            const detailsImage = document.querySelector('img.detail-image');
            detailsImage.setAttribute("src",ramen.image);
            const h2Name = document.querySelector('h2.name');
            h2Name.textContent = ramen.name;
            const h3Restaurant=  document.querySelector('h3.restaurant');
            h3Restaurant.textContent = ramen.restaurant;
            const displayRatings = document.getElementById('rating-display');
            displayRatings.textContent = ramen.rating;
            const displayComment = document.getElementById('comment-display');
            displayComment.textContent = ramen.comment;
        })

        ramenMenu.appendChild(img)
        
    })

}

const newRamenForm = document.getElementById('new-ramen');
newRamenForm.addEventListener("submit",handleSubmit)

function handleSubmit(e){
    e.preventDefault();   
    console.log(e); 
    
        const newName = document.querySelector('#new-name');
        const newRestaurant = document.getElementById('new-restaurant');
        const newImage = document.getElementById('new-image');
        const newRating = document.getElementById('new-rating');
        const newComment = document.getElementById('new-comment');

        const newRamen={                  
            name: newName.value,
            restaurant: newRestaurant.value,
            image: newImage.value,
            rating: newRating.value,
            comment: newComment.value
        }
        addNewItem(newRamen)
        newRamenForm.reset()
    } 


function addNewItem(newRamen){
    fetch(url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRamen)
    })
    .then(response=>response.json())
    .then(item=> console.log(item))
    
} 

//API END POINT
const url = 'http://localhost:3000/ramens'

//fetch request -gets all ramen
function fetchData(){
    return fetch(url)
    .then(resp=> resp.json())
    .then(data=>data)
}












