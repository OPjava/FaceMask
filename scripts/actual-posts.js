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

              <div class="js-likes-counter">0 Reacts</div>

              <div class="comments-count">0 Comments</div>

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
              <div class="comments-list js-comments-list">
              <!-- Existing comments will be dynamically added here -->
             </div>
            <div class="comment-input-box"> 
            <div class="comment-head">
              <img src="${profileImage}" class="comment-profile-icon">
            </div>
            <div class="comment-text">
                  <input id="comment-bar-text" class="comment-bar js-comment-bar" type="text" placeholder="Write a Comment... ">
                  <button class="comment-btn"id="saveButton">Save</button>

            </div>
            </div>

        </div>

      </div>

</div>

      `;
  const postsContainer = document.querySelector(".js-posts-container");
  postsContainer.insertAdjacentHTML("afterbegin", postHTML);
  // Add event listener for comments
  const commentInput = document.getElementById("comment-bar-text");
  const saveButton = document.getElementById("saveButton");
  const commentsList = document.querySelector(".js-comments-list");
  const commentsCountDiv = document.querySelector(".comments-count");
  const reactsCountDiv = document.querySelector(".js-likes-counter");
  let commentCounter = 0;

  // Add event listener for likes
  let likesCounter = 0;
  let loveCounter = 0;
  let angryCounter = 0;
  let hahaCounter = 0;
  const likeButtons = document.querySelectorAll(".actual-emoji");
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const imgSrc = button.querySelector("img").src;
      if (imgSrc.includes("images/reacts/like.gif")) {
        likesCounter++;
        updateReactCounter(reactsCountDiv, likesCounter, "like");
      } else if (imgSrc.includes("images/reacts/love.gif")) {
        loveCounter++;
        updateReactCounter(reactsCountDiv, loveCounter, "love");
      } else if (imgSrc.includes("images/reacts/angry.gif")) {
        angryCounter++;
        updateReactCounter(reactsCountDiv, angryCounter, "angry");
      } else if (imgSrc.includes("images/reacts/haha.gif")) {
        hahaCounter++;
        updateReactCounter(reactsCountDiv, hahaCounter, "haha");
      }

      // console.log("React added:", getTotalReacts());
    });
  });

  function updateReactCounter(element, count, type) {
    element.innerHTML = `
    <div class="likes-counter-container"> 
    <img class="likes-size" src="images/reacts/${type}.gif" alt="${
      type.charAt(0).toUpperCase() + type.slice(1)
    }">
    <span>${count} Reacts</span>
    </div>
    `;
  }

  function getTotalReacts() {
    return likesCounter + loveCounter + angryCounter + hahaCounter;
  }

  saveButton.addEventListener("click", () => {
    const commentValue = commentInput.value;
    if (commentValue.trim() !== "") {
      // Create a new comment HTML
      const newCommentHTML = `
            <div class="comment-post">
            <img src="${profileImage}" class="comment-profile-icon" alt="Profile Image">
            <div class="comment-wrap">
            <span class="commenter-name">${profileName}</span>
            <p class="commenter-box">${commentValue}</p>
            </div>
            </div>
          `;

      // Add the new comment to the comments list
      commentsList.insertAdjacentHTML("afterbegin", newCommentHTML);

      // Increment the comment counter and update the display
      commentCounter++;
      commentsCountDiv.textContent = `${commentCounter} Comments`;
      // Clear the input field
      commentInput.value = "";

      // console.log("New comment added:", commentValue);
    }
  });

  // add keydown event listener to the comment list
  commentInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      saveButton.click();
    }
  });

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

newPostHTML(
  "images/profile-icon.jpeg",
  "John",
  "This is a new post!",
  "images/tot-tot.jpg"
);
