// Menu Mobile
var open_nav = true;
function alterNav() {
    if (open_nav) {
        document.getElementById("nav__vertical").style.display = "flex";
        document.getElementById("icon-open").style.display = "none";
        document.getElementById("icon-close").style.display = "flex";
        document.body.style.overflow = "hidden";
    } else {
        document.getElementById("nav__vertical").style.display = "none";
        document.getElementById("icon-open").style.display = "flex";
        document.getElementById("icon-close").style.display = "none";
        document.body.style.overflow = "auto";
    }
    open_nav = !open_nav;
}

//  Initialize Swiper
//  Banners
var swiperBanners = new Swiper(".swiperBanners", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});
// Products
var swiperProducts = new Swiper(".swiperProducts", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// Accordion Links Mobile
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Modal
window.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var closeBtn = document.getElementsByClassName('close')[0];

    modal.style.display = 'block';

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});