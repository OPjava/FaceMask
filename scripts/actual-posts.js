export function newPostHTML(profileImage, profileName, postText, postImage) {
    const postHTML = `
        <div class="actual-post">
            <div class="content-head">
                <img src="${profileImage}" class="profile-icon">
                <span>${profileName} </span>
            </div>
            <div class="content-text">
        <span>${postText}</span>
        ${postImage ? `
          <div class="image-post-container">
            <img src="${postImage}" class="post-image">
          </div>
        ` : ''}

            </div>
            <div class="post-footer">
                <div class="reacts">
                    <div>
                        &#128514;
                        <span>0</span>
                    </div>
                    <div>
                        <span>0 comments</span>
                        <span>0 Shares</span>
                    </div>
                </div>
                <div class="react-types">
                    <div class="react-icons">
                        <img src="images/another/like.png" alt="">
                        <span>Like</span>
                    </div>
                    <div class="react-icons">
                        <img src="images/another/comment.png" alt="">
                        <span>Comment</span>
                    </div>
                    <div class="react-icons">
                        <img src="images/another/send.png" alt="">
                        <span>Send</span>
                    </div>
                    <div class="react-icons">
                        <img src="images/another/share.png" alt="">
                        <span>Share</span>
                    </div>
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
document.addEventListener('DOMContentLoaded', loadPostsFromLocalStorage);



