document.addEventListener("DOMContentLoaded", () => {
  function createPost(profileName, profileImage) {
    // Construct the new HTML content for the post
    const newCreateHTML = `
            <img src="${profileImage}" class="profile-icon">
            <input class="post-bar" type="text" placeholder="What's on your mind, ${profileName}?">
    `;

    // Find the .js-create-post container and update its content
    const createPostContainer = document.querySelector('.js-post-header');
    if (createPostContainer) {
      // Replace existing content with the new HTML
      createPostContainer.innerHTML = newCreateHTML;
    } else {
      console.error('Container with class .js-post-header not found.');
    }
  }

  // Call the function with sample values
  createPost("John Doe", "images/profile-icon.jpeg");
  
});
