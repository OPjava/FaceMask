
 const storiesHTML = `
          <button class="arrow-back material-symbols-outlined">
            arrow_back_ios
          </button>
          <div class="swiper-wrapper">
            <div class="stories swiper-slide">
              <div class="story-contain-image">
                <img src="images/Admiral-Custom-Pet-Portrait-7.jpg" class="stories-icons">
              </div>
              <span class="stories-name">Dog Admiral</span>
            </div>
            <div class="stories swiper-slide">
              <div class="story-contain-image">
                <img src="images/Admiral-cat.jpg" class="stories-icons">
              </div>
              <span class="stories-name">Cat Admiral</span>
            </div>
            <div class="stories swiper-slide">
              <div class="story-contain-image">
                <img src="images/prince-cat.webp" class="stories-icons">
              </div>
              <span class="stories-name">Cat Prince</span>
            </div>
            <div class="stories swiper-slide">
              <div class="story-contain-image">
                <img src="images/Cat lord.jpg" class="stories-icons">
              </div>
              <span class="stories-name">Cat Lord</span>
            </div>
            <div class="stories swiper-slide">
              <div class="story-contain-image">
                <img src="images/Admiral-Custom-Pet-Portrait-7.jpg" class="stories-icons">
              </div>
              <span class="stories-name">Dog Admiral</span>
            </div>
            <div class="stories swiper-slide">
              <div class="story-contain-image">
                <img src="images/Admiral-Custom-Pet-Portrait-7.jpg" class="stories-icons">
              </div>
              <span class="stories-name">Dog Admiral</span>
            </div>
          </div>
          <button class="arrow-forward material-symbols-outlined">
            arrow_forward_ios
          </button>
 `;
 document.querySelector('.js-stories-container').innerHTML = storiesHTML;

  document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.js-stories-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      loopAdditionalSlides: 1,  // Ensures enough slides are duplicated
      navigation: {
        nextEl: '.arrow-forward',
        prevEl: '.arrow-back',
      },
      breakpoints: {
        // When window width is >= 320px
        320: {
          slidesPerView: 'auto',
          spaceBetween: 2
        },
        // When window width is >= 480px
        480: {
          slidesPerView: 'auto',
          spaceBetween: 2

        },
        // When window width is >= 640px
        640: {
          slidesPerView: 'auto',
          spaceBetween: 2
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 'auto',
          spaceBetween: 10
        }
      }
      
    });

    // Function to update Swiper on window resize
    function updateSwiper() {
      if (window.innerWidth <= 480) {
        swiper.params.centeredSlides = true;
      } else {
        swiper.params.centeredSlides = false;
      }
      swiper.update();
    }

    // Initial call and event listener for window resize
    updateSwiper();
    window.addEventListener('resize', updateSwiper);
  });

