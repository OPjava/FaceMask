export function newPostHTML(profileImage, profileName, postText, postImage) {
    const postHTML = `
<div class="actual-post">
    <div class="content-head">
        <img src="${profileImage}" class="profile-icon">
        <span>${profileName}</span>
    </div>
    <div class="content-text">
        <span>${postText}</span>
        ${
          postImage
            ? `
            <div class="image-post-container">
              <img src="${postImage}" class="post-image">
            </div>
          `
            : ""
        }
    </div>

        <div class="footer-post">
        <div class="top-footer">
          <div class="emojis-container">
            <div class="emojis">
              <div class="actual-emoji">
                <img class="emoji-size" src="images/reacts/like.gif" alt="">
              </div>
              <div class="actual-emoji">
                <img class="emoji-size" src="images/reacts/love.gif" alt="">
              </div>
              <div class="actual-emoji">
                <img class="emoji-size" src="images/reacts/angry.gif" alt="">
              </div>
              <div class="actual-emoji">
                <img class="emoji-size" src="images/reacts/haha.gif" alt="">
              </div>
            </div>
          <div class="word">Reacts</div>
          </div>
          <div>another text</div>
          <div>any text</div>
          <div>any text</div>
            </div>

        <div class="bottom-footer">
          <div>any text</div>
          <div>any text</div>
          <div>any text</div>
          <div>any text</div>
        </div>

      </div>

</div>

      `;
      const postsContainer = document.querySelector(".js-posts-container");
      postsContainer.insertAdjacentHTML('afterbegin', postHTML);
  
      // Save post to local storage
      const post = { profileImage, profileName, postText, postImage };
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));
  }
  
  // Function to load posts from local storage
  export function loadPostsFromLocalStorage() {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.forEach(post => {
          newPostHTML(post.profileImage, post.profileName, post.postText, post.postImage);
      });
  }
  
  // Call this function on page load
