// write your code here

//global storage
let objGlobal;

//ramen images node
const ramenImages = document.getElementById('ramen-menu');
//ramen details nodes
const ramenDetails = document.getElementById('ramen-detail');
const detailsImage = document.querySelector('img.detail-image');
const h2Name = document.querySelector('h2.name');
const h3Restaurant=  document.querySelector('h3.restaurant');
const displayRatings = document.getElementById('rating-display');
const displayComment = document.getElementById('comment-display');
//new ramen form
const newRamenForm = document.getElementById('new-ramen')
const newName = document.getElementById('new-name').value;
const newRestaurant = document.getElementById('new-restaurant').value;
const newImage = document.getElementById('new-image').value;
const newRating = document.getElementById('new-rating').value;
const newComment = document.getElementById('new-comment').value;


//API END POINT
const url = 'http://localhost:3000/ramens'

//fetch request -gets all ramen
fetch(url)
.then(resp=> resp.json())//renders the API's response as plain old JS object,returns and passes the object to the next .then
.then(data => data.forEach(renderImages))///iterates through each element of the data array objects     


/////////////////////// CORE DELIVERABLES ///////////////////////////
//1.renders ramen images in the #ramen-menu

//create image element

const renderImages=(ramen)=>{
    let image = document.createElement('img');
    image.src = ramen.image;
    image.alt = ramen.name;
    let restaurant = ramen.restaurant;
    let rating = ramen.rating;
    let comment = ramen.comment
    image.dataset.id = ramen.id;// adds a data_id to each element
    //add event listener for clicking on an image
    image.addEventListener('click', ()=>{
        //2.Click on an image from the #ramen-menu div and see all the
        //info about that ramen displayed inside the #ramen-detail div 
        detailsImage.src = image.src;
        h2Name.innerHTML =  image.alt;
        h3Restaurant.innerHTML = restaurant;
        displayRatings.textContent=rating;
        displayComment.textContent=comment;
        newRamenForm.dataset.id=image.dataset.id;


    })

    //append child to parent element
    ramenImages.appendChild(image);
}

//3.Create a new ramen after submitting the new-ramen form
//a. submit event listener
//b.get method
//c.reset form method

//event
newRamenForm.addEventListener('submit',(e)=>{
    //adds new ramen to the menu i.e the #ramen-menu div
    e.preventDefault();
    console.log(e)
    //create an object that takes in the new values
    const newObj = {
        id: parseInt(newRamenForm.dataset.id),
        name:`${newImage}`,
        restaurant:`${newRestaurant}`,
        image:`${newImage}`,
        rating: `${newRating}`,
        comment: `${newComment}`

    }
    addRamen(newObj)
    newRamenForm.reset()
})

function addRamen(newObj){
    fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObj)
      })
        .then((resp) => resp.json())
        .then((dataAdd) => dataAdd);
    }





