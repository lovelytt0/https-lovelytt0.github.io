// Sample blog posts
const blogPosts = [
  {
    title: "Paper Review: Generalized Seismic Phase Detection with Deep Learning",
    date: "2019-11-06",
    preview: "This paper introduces a generalized phase detection (GPD) framework using deep learning to detect seismic body wave phases.",
    link: "paper-review-3.html"
  },

  {
    title: "Paper Review: Regional extent of the large coseismic slip zone of the 2011 Mw 9.0 Tohoku‐Oki earthquake delineated by on‐fault aftershocks",
    date: "2019-10-28",
    preview: "This study delineates the outer edge of the large-slip zone of the 2011 Tohoku-Oki earthquake using aftershock patterns.",
    link: "paper-review-2.html"
  },
  {
    title: "Paper Review: Outer trench-slope faulting and the 2011 Mw 9.0 off the Pacific coast of Tohoku Earthquake",
    date: "2019-10-27",
    preview: "This paper discusses the potential for great extensional faulting in the outer trench slope or outer rise region seaward of the 2011 Tohoku Earthquake rupture zone.",
    link: "paper-review-1.html"
  },
];

// Function to display blog post previews
function displayBlogPosts() {
  const postSlider = document.querySelector('.post-slider');
  
  blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3><a href="${post.link}">${post.title}</a></h3>
      <p class="date">${post.date}</p>
      <p>${post.preview}</p>
      <a href="${post.link}" class="read-more">Read more</a>
    `;
    postSlider.appendChild(postElement);
  });
}

// Sample images
const images = [
  "./Posters/2016.jpeg",
  "./Posters/2017-1.jpeg",
  "./Posters/2017-2.jpeg",
  "./Posters/2018.jpeg", 
  "./Posters/2019.jpeg",
  "./Posters/2020.jpg",
];

// Function to display image gallery
function viewOfPosters() {
  const imageGallery = document.getElementById('image-gallery');
  
  images.forEach(src => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = "Poster Image";
    imgElement.addEventListener('click', () => openModal(src));
    imageGallery.appendChild(imgElement);
  });
}

// Function to open modal with full-size image
function openModal(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = "block";
  modalImg.src = src;
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = "none";
}

// Call the functions when the page loads
window.onload = function() {
  displayBlogPosts();
  viewOfPosters();
}

// Event listener for closing the modal
document.getElementById('modal').addEventListener('click', closeModal);

