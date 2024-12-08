function newStories(storyImage, storyName) {
  const storyHTML = `
    <div class="stories swiper-slide">
      <div class="story-contain-image">
        <img src="${storyImage}" class="stories-icons">
      </div>
      <span class="stories-name">${storyName}</span>
    </div>
  `;
  const storyWrapper = document.querySelector(
    ".js-stories-container .swiper-wrapper"
  );
  storyWrapper.innerHTML += storyHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  // Add stories
  newStories("images/Admiral-cat.jpg", "First Admiral");
  newStories("images/Admiral-cat.jpg", "Second Admiral");
  newStories("images/Admiral-cat.jpg", "Third Admiral");
  newStories("images/Admiral-cat.jpg", "Third Admiral");
  newStories("images/Admiral-cat.jpg", "Third Admiral");
  newStories("images/Admiral-cat.jpg", "Third Admiral");

  // Initialize Swiper
  const swiper = new Swiper(".js-stories-container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: false,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".arrow-forward",
      prevEl: ".arrow-back",
    },
    breakpoints: {
      320: { slidesPerView: "auto", spaceBetween: 2 },
      480: { slidesPerView: "auto", spaceBetween: 2 },
      640: { slidesPerView: "auto", spaceBetween: 2 },
      768: { slidesPerView: "auto", spaceBetween: 10 },
    },
  });

  // Update Swiper on resize
  function updateSwiper() {
    swiper.params.centeredSlides = window.innerWidth <= 480;
    swiper.update();
  }
  updateSwiper();
  window.addEventListener("resize", updateSwiper);
});
