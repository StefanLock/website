const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeButton = document.querySelector('.close');

const projectData = {  // Store your project details here
  "1": {
    title: "Project 1 Details",
    image: "path/to/project1.png", // Path to your image
    description: "Detailed description of project 1.  You can use HTML here if needed (e.g., for paragraphs, lists, etc.)",
    link: "https://github.com/yourusername/project1"
  },
  "2": {
    title: "Project 2 Details",
    image: "path/to/project2.jpg",
    description: "More about project 2...",
    link: "https://github.com/yourusername/project2"
  },
  "3": {
    title: "Project 2 Details",
    image: "path/to/project2.jpg",
    description: "More about project 2...",
    link: "https://github.com/yourusername/project2"
  },
  "4": {
    title: "Project 2 Details",
    image: "path/to/project2.jpg",
    description: "More about project 2...",
    link: "https://github.com/yourusername/project2"
  },
  // ... more projects
};

cards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.dataset.projectId;
    const project = projectData[projectId];

    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalDescription.innerHTML = project.description; // Use innerHTML for HTML content
    modalLink.href = project.link;
    modalLink.style.display = project.link ? 'block' : 'none'; // Show/hide link

    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});