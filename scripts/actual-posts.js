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
            <div class="reacts-comments-footer">

              <div>20.0k</div>

              <div>50 Comments</div>

           </div>

        <div class="top-footer">
          <div class="emojis-container">
            <div class="share-content">
            <img src="images/another/like.png" alt="">
            <div class="word">Likes</div>
            </div>
            <div class="emojis">
              <div class="actual-emoji">
                <img class="emoji-size" src="images/reacts/like.gif" alt="Like">
              </div>
              <div class="actual-emoji">
                <img class="emoji-size" src="images/reacts/love.gif" alt="Love">
              </div>
              <div class="actual-emoji">
                <img class="emoji-size" src="images/reacts/angry.gif" alt="Angry">
              </div>
              <div class="actual-emoji">
                <img class="emoji-size" src="images/reacts/haha.gif" alt="Haha">
              </div>
            </div>
          </div>

              <div class="share-content">
                <img src="images/another/comment.png" alt="">
                <div>Comment</div>
              </div>
              <div class="share-content">
                <img src="images/another/send.png" alt="">
                <div>Send</div>
              </div>
              <div class="share-content">
                <img src="images/another/share.png" alt="">
                <div>Share</div>
              </div>

        </div>

        <div class="comments-container js-comments-container">
            <div class="comment-head">
              <img src="${profileImage}" class="comment-profile-icon">
            </div>
            <div class="comment-text">
                  <input class="comment-bar js-comment-bar" type="text" placeholder="Write a Comment... ">
            </div>
        </div>

      </div>

</div>

      `;
  const postsContainer = document.querySelector(".js-posts-container");
  postsContainer.insertAdjacentHTML("afterbegin", postHTML);

  // Save post to local storage
  const post = { profileImage, profileName, postText, postImage };
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Function to load posts from local storage
export function loadPostsFromLocalStorage() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach((post) => {
    newPostHTML(
      post.profileImage,
      post.profileName,
      post.postText,
      post.postImage
    );
  });
}

// Call this function on page load
