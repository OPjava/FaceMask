function newPostHTML(profileImage, profileName, postText, postImage) {
    const postHTML = `
        <div class="actual-post">
            <div class="content-head">
                <img src="${profileImage}" class="profile-icon">
                <span>${profileName} </span>
            </div>
            <div class="content-text">
                <span>
                    ${postText}
                </span>
                <div class="image-post-container">
                    <img src="${postImage}" class="post-image">
                </div>
            </div>
            <div class="post-footer">
                <div class="reacts">
                    <div>
                        &#128514;
                        <span>20k</span>
                    </div>
                    <div>
                        <span>1.8k comments</span>
                        <span>2.5k Shares</span>
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
    postsContainer.innerHTML = postHTML + postsContainer.innerHTML;
}

newPostHTML(
    "images/profile-icon.jpeg",
    "John Micheal",
    "This is a new post!",
    "images/tot-tot.jpg"
);

newPostHTML(
    "images/profile-icon.jpeg",
    "Peter Riad",
    "This is a new post!",
    "images/tot-tot.jpg"
);

newPostHTML(
    "images/profile-icon.jpeg",
    "Joe Suliman",
    "This is a new post!",
    "images/tot-tot.jpg"
);
newPostHTML(
  "images/profile-icon.jpeg",
  "John Micheal",
  "This is a new post!",
  "images/tot-tot.jpg"
);

newPostHTML(
  "images/profile-icon.jpeg",
  "Peter Riad",
  "This is a new post!",
  "images/tot-tot.jpg"
);

newPostHTML(
  "images/profile-icon.jpeg",
  "Joe Suliman",
  "This is a new post!",
  "images/tot-tot.jpg"
);

document.querySelector(".js-posts-container").innerHTML = postsContainer;





// function createNewPost(profileImage, username, postText, postImage) {
//     const newPostHTML = `
//         <div class="actual-post">
//             <div class="content-head">
//                 <img src="${profileImage}" class="profile-icon">
//                 <span>${username}</span>
//             </div>
//             <div class="content-text">
//                 <span>${postText}</span>
//                 <div class="image-post-container">
//                     <img src="${postImage}" class="post-image">
//                 </div>
//             </div>
//             <div class="post-footer">
//                 <div class="reacts">
//                     <div>
//                         &#128514;
//                         <span>0</span>
//                     </div>
//                     <div>
//                         <span>0 comments</span>
//                         <span>0 Shares</span>
//                     </div>
//                 </div>
//                 <div class="react-types">
//                     <div class="react-icons">
//                         <img src="images/another/like.png" alt="">
//                         <span>Like</span>
//                     </div>
//                     <div class="react-icons">
//                         <img src="images/another/comment.png" alt="">
//                         <span>Comment</span>
//                     </div>
//                     <div class="react-icons">
//                         <img src="images/another/send.png" alt="">
//                         <span>Send</span>
//                     </div>
//                     <div class="react-icons">
//                         <img src="images/another/share.png" alt="">
//                         <span>Share</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
//     // Prepend the new post to the posts container
//     const postsContainer = document.querySelector('.js-posts-container');
//     postsContainer.innerHTML = newPostHTML + postsContainer.innerHTML;
// }
// // Example usage
// createNewPost('images/profile-icon.jpeg', 'New User', 'This is a new post!', 'images/new-post-image.jpg');
// createNewPost('images/profile-icon.jpeg', 'New User', 'This is a new post!', 'images/new-post-image.jpg');
// createNewPost('images/profile-icon.jpeg', 'New User', 'This is a new post!', 'images/new-post-image.jpg');

// document.querySelector('.js-posts-container').innerHTML = postsContainer;