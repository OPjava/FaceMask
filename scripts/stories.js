

const storiesHTML = `
<button class="arrow-back material-symbols-outlined">
            arrow_back_ios
          </button>
          <div class="stories">
            <div class="story-contain-image">
              <img src="images/Admiral-Custom-Pet-Portrait-7.jpg" class="stories-icons">
            </div>
            <span class="stories-name">Dog Admiral</span>
          </div>
          <div class="stories">
            <div class="story-contain-image">
              <img src="images/Admiral-cat.jpg" class="stories-icons">
            </div>
            <span class="stories-name">Cat Admiral</span>
          </div>
          <div class="stories">
            <div class="story-contain-image">
              <img src="images/prince-cat.webp" class="stories-icons">
            </div>
            <span class="stories-name">Cat Prince</span>
          </div>
          <div class="stories">
            <div class="story-contain-image">
              <img src="images/Cat lord.jpg" class="stories-icons">
            </div>
            <span class="stories-name">Cat Lord</span>
          </div>
          <button class="arrow-forward material-symbols-outlined">
            arrow_forward_ios
          </button>
`;
document.querySelector('.js-stories-container').innerHTML = storiesHTML;

