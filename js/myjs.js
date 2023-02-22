// =====> Change NavBar Style on scroll <===== //

window.addEventListener("scroll", () => {
    document.querySelector(".navbar-light").classList.toggle("window-scroll", window.scrollY > 100);
});




// =====> Show The Answer p <===== //
const question = document.querySelectorAll(".question");
question.forEach((question) => {
    question.addEventListener("click",() => {
        question.classList.toggle("open");
   
    const icon = question.querySelector(".qustion-icon i");
    if(icon.className === "fa fa-plus"){
       icon.className = "fa fa-minus";
    }else{
        icon.className = "fa fa-plus";   
    } 
});
});



// Testimonials Slider

var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});
