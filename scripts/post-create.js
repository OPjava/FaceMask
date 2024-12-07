
function createPost(profileName, profileImage) {
  // Construct the new HTML content for the post
  const newCreateHTML = `
    <img src="${profileImage}" class="profile-icon">
    <input class="post-bar js-post-bar" type="text" placeholder="What's on your mind, ${profileName}?">
    <input type="file" class="image-upload js-image-upload" accept="image/*">
    <button class="js-post-button">Post</button>
    
  `;

  // Find the .js-create-post container and update its content
  const createPostContainer = document.querySelector('.js-post-header');
  if (createPostContainer) {
    // Replace existing content with the new HTML
    createPostContainer.innerHTML = newCreateHTML;

    // Add an event listener to handle the input
    const postButton = createPostContainer.querySelector('.js-post-button');
    const postBar = createPostContainer.querySelector('.js-post-bar');

    // Function to handle posting
    const handlePost = () => {
      const postText = postBar.value.trim(); // Retrieves the text from the post-bar input field and trims any extra spaces.
      const imageUpload = createPostContainer.querySelector('.js-image-upload');
      const file = imageUpload.files[0];

      if (postText || file) {
        if (file) {
          const reader = new FileReader(); // Uses a FileReader to read the image file and convert it to a Base64 data URL.
          reader.onload = function(event) {
            newPostHTML(profileImage, profileName, postText, event.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          newPostHTML(profileImage, profileName, postText, '');
        }
        postBar.value = ''; // Clear the input field after posting
        imageUpload.value = ''; // Clear the file input after posting
      }
    };

    // Add click event listener to the post button
    postButton.addEventListener('click', handlePost);

    // Add keydown event listener to the post bar
    postBar.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission
        handlePost();
      }
    });

  } else {
    console.error('Container with class .js-post-header not found.');
  }
}

// Call the function with sample values
createPost("John", "images/profile-icon.jpeg");