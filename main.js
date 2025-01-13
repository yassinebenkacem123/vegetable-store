//declaration of the variables:
const buttons = document.querySelectorAll(".btn");
const wrapper = document.querySelector(".swiper-wrapper");
//part for icons:
function iconsActions()
{
    //variables declaration : 
    const searchIcon = document.querySelector(".fa-search"),
    shoppingCartIcon = document.querySelector(".fa-shopping-cart"),
    loginIcon = document.querySelector(".fa-user"),
    barsIcon = document.querySelector(".fa-bars"),
    searchForm = document.querySelector(".search-form"),
    shoppingCart  = document.querySelector(".shopping-cart"),
    loginForm = document.querySelector(".login-form"),
    navBar = document.querySelector(".navbar");
    // event listener for the search icon :
    searchIcon.addEventListener("click", ()=>{
        searchForm.classList.toggle("active");
        searchIcon.classList.toggle("changeColor");
        loginForm.classList.remove("active");
        loginIcon.classList.remove("changeColor");
        navBar.classList.remove("active");
        shoppingCart.classList.remove("active");
        shoppingCartIcon.classList.remove("changeColor");
        barsIcon.classList.remove("changeColor");

    });
    // event listener for the cart-shopping icon :
    shoppingCartIcon.addEventListener("click", ()=>{
        shoppingCart.classList.toggle("active");
        shoppingCartIcon.classList.toggle("changeColor");
        loginForm.classList.remove("active");
        loginIcon.classList.remove("changeColor");
        navBar.classList.remove("active");
        searchForm.classList.remove("active"); 
        barsIcon.classList.remove("changeColor");
        searchIcon.classList.remove("changeColor");
    });
    // event listener for the login icon : 
    loginIcon.addEventListener("click", ()=>{
        loginForm.classList.toggle("active");
        loginIcon.classList.toggle("changeColor");
        navBar.classList.remove("active");
        shoppingCart.classList.remove("active");
        searchForm.classList.remove("active"); 
        shoppingCartIcon.classList.remove("changeColor");
        barsIcon.classList.remove("changeColor");
        searchIcon.classList.remove("changeColor");
    });
    // event listener for the bar : 
    barsIcon.addEventListener("click", ()=>{
        navBar.classList.toggle("active");
        barsIcon.classList.toggle("changeColor");
        shoppingCart.classList.remove("active");
        loginForm.classList.remove("active");
        searchForm.classList.remove("active");    
        loginIcon.classList.remove("changeColor");
        shoppingCartIcon.classList.remove("changeColor");
        searchIcon.classList.remove("changeColor");
    });

    window.onscroll = ()=>{
        // Boxes:
        navBar.classList.remove("active");
        shoppingCart.classList.remove("active");
        loginForm.classList.remove("active");
        searchForm.classList.remove("active");        
        // Icons:
        loginIcon.classList.remove("changeColor");
        shoppingCartIcon.classList.remove("changeColor");
        barsIcon.classList.remove("changeColor");
        searchIcon.classList.remove("changeColor");
    }

}
iconsActions();
//part for boxes :
let products = [
    {
        id:0,
        category:"fruit",
        title:"fresh Orange",
        image:"./images/orange.png",
        price:4.99,
        star1:"fas fa-star",
        star2:"fas fa-star",
        star3:"fas fa-star",
        star4:"fas fa-star",
        star5:"fas fa-star-halt-alt",
    },
    {
    id:1,
    category:"fruit",
    title:"fresh Apple",
    image:"./images/apples-table.png",
    price:20,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fas fa-star",
    star4:"fas fa-star",
    star5:"fas fa-star",
},
{
    id:2,
    category:"fruit",
    title:"fresh Banana",
    image:"./images/banana.png",
    price:30,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fas fa-star",
    star4:"fas fa-star",
    star5:"fas fa-star-half-alt",
},
{
    id:3,
    category:"vegetable",
    title:"fresh Beetroot",
    image:"./images/beetroot.jpg",
    price:9,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fa-regular fa-star",
    star4:"fa-regular fa-star",
    star5:"fa-regular fa-star",
},
{
    id:4,
    category:"vegetable",
    title:"fresh Gralic",
    image:"./images/gralic.png",
    price:3,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fas fa-star",
    star4:"fa-regular fa-star",
    star5:"fa-regular fa-star",
},
{
    id:5,
    category:"fruit",
    title:"fresh Grapes",
    image:"./images/grapes.png",
    price:23,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fas fa-star",
    star4:"fas fa-star",
    star5:"fas fa-star",
},
{
    id:6,
    category:"vegetable",
    title:"fresh Lettuce",
    image:"./images/lettuce.png",
    price:20,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fas fa-star",
    star4:"fas fa-star",
    star5:"fas fa-star-half-alt",
},
{
    id:7,
    category:"vegetable",
    title:"fresh Onion",
    image:"./images/onion.jpg",
    price:2,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fas fa-star-half-alt",
    star4:"fa-regular fa-star",
    star5:"fa-regular fa-star",
},
{
    id:8,
    category:"fruit",
    title:"fresh Pears",
    image:"./images/pears.png",
    price:11,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fas fa-star",
    star4:"fas fa-star",
    star5:"fas fa-star",
},
{
    id:9,
    category:"vegetable",
    title:"fresh Potato",
    image:"./images/potato.jpg",
    price:6,
    star1:"fas fa-star",
    star2:"fas fa-star",
    star3:"fas fa-star",
    star4:"fa-regular fa-star",
    star5:"fa-regular fa-star",
},



];
var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',  // Horizontal direction
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    speed:2300,
    on: {
        autoplayTimeLeft(swiper, time, progress) {
            swiper.slidePrev();  // Slide to the previous slide
        },
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});
function displayAll(){
    
    let htmlElement = products.map(product=>
        `<div class="box swiper-slide">
            <img src=${product.image}>
            <div class="content">
                <h1 class= "title">${product.title}</h1>
                <p class = "price">$ ${product.price}</p>
            </div>
            <div class="stars">
                <i class="${product.star1}"></i>
                <i class="${product.star2}"></i>
                <i class="${product.star3}"></i>
                <i class="${product.star4}"></i>
                <i class="${product.star5}"></i>
             </div>
            <button type = "button" class ="btn">Read more</button>
        </div>`
    );
    htmlElement = htmlElement.join("");
    wrapper.innerHTML = "";
    wrapper.innerHTML = htmlElement;

}
//display products :
function displayProducts(array){
    
    let htmlElement = array.map(product=>
        `<div class="box swiper-slide">
            <img src=${product.image}>
            <div class="content">
                <h1 class= "title">${product.title}</h1>
                <p class = "price">$ ${product.price}</p>
            </div>
            <div class="stars">
                <i class="${product.star1}"></i>
                <i class="${product.star2}"></i>
                <i class="${product.star3}"></i>
                <i class="${product.star4}"></i>
                <i class="${product.star5}"></i>
             </div>
            <button type = "button" class ="btn">Read more</button>
        </div>`
    );
    htmlElement = htmlElement.join("");
    wrapper.innerHTML += htmlElement;

}
displayProducts(products);

// filtering products :

function displayFrutis()
{
    let fruits = products.filter(product => product.category === "fruit");
    let htmlTable = fruits.map(fruit=>
        `<div class="box swiper-slide">
            <img src=${fruit.image}>
            <div class="content">
                <h1 class= "title">${fruit.title}</h1>
                <p class = "price">$ ${fruit.price}</p>
            </div>
            <div class="stars">
                <i class="${fruit.star1}"></i>
                <i class="${fruit.star2}"></i>
                <i class="${fruit.star3}"></i>
                <i class="${fruit.star4}"></i>
                <i class="${fruit.star5}"></i>
             </div>
            <button type = "button" class ="btn">Read more</button>
        </div>`
    )
    htmlTable = htmlTable.join("");
    wrapper.innerHTML = "";
    wrapper.innerHTML =  htmlTable;

}
function displayVegetables()
{
    let vegetables = products.filter(product => product.category === "vegetable");
    let htmlTable = vegetables.map(vegetable=>
        `<div class="box swiper-slide">
            <img src=${vegetable.image}>
            <div class="content">
                <h1 class= "title">${vegetable.title}</h1>
                <p class = "price">$ ${vegetable.price}</p>
            </div>
            <div class="stars">
                <i class="${vegetable.star1}"></i>
                <i class="${vegetable.star2}"></i>
                <i class="${vegetable.star3}"></i>
                <i class="${vegetable.star4}"></i>
                <i class="${vegetable.star5}"></i>
             </div>
            <button type = "button" class ="btn">Read more</button>
        </div>`
    )
    htmlTable = htmlTable.join("");
    wrapper.innerHTML = "";
    wrapper.innerHTML =  htmlTable;

}

    buttons.forEach((button)=>{
        button.addEventListener("click", (event)=>{
            if(event.currentTarget.value === "all")displayAll();
            else if(event.currentTarget.value === "vegetable")displayVegetables();
            else if(event.currentTarget.value === "fruit")displayFrutis();
        });
    });





// swiper-slider part :
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 10,
    autoplay:{
        delay:7000,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

