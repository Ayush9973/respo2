document.addEventListener('DOMContentLoaded', function () {
  let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }

  let sections = document.querySelectorAll('section');
  let navlinks = document.querySelectorAll('header .navbar a');

  window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    sections.forEach(sec => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  }

  document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
  }

  document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
  }

  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
document.addEventListener('DOMContentLoaded', function () {
  function loader() {
    document.querySelector('.loader').classList.add('fade-out');
    setTimeout(function() {
      document.querySelector('.loader').style.display = 'none';
    }, 2000);
  }

  function fadeout() {
    loader(); // Call loader function immediately
    document.removeEventListener('DOMContentLoaded', fadeout); // Remove event listener to prevent multiple calls
  }

  window.onload = fadeout;
});