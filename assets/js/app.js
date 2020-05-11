let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");
let stob = document.querySelector("body");
    
    
    
burger.addEventListener("click", function (evt) {evt.preventDefault();
burger.classList.toggle("active")
});
burger.addEventListener("click", function (evt) {evt.preventDefault();
menu.classList.toggle("active")
});
burger.addEventListener("click", function (evt) {evt.preventDefault();
stob.classList.toggle("lock")
});