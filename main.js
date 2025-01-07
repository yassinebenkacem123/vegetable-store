function iconsAction()
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
    
iconsAction();