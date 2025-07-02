const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeButton = document.querySelector('.close');

const projectData = {  // Store your project details here
  "1": {
    title: "Python Build pipeline",
    image: "",
    description: "A python build pipeline using Github actions for a basic flask api.",
    link: "https://github.com/StefanLock/python-build-pipeline"
  },
  "2": {
    title: "Monitoring Stack",
    image: "",
    description: "A monitoring stack made up of Grafana, Loki and prometheus which can be run locally for demo purposes.",
    link: "https://github.com/StefanLock/monitoring-stack"
  },
  "3": {
    title: "Portable IDE",
    image: "",
    description: "A portable IDE wrapped in Docker which can be run anywhere",
    link: "https://github.com/StefanLock/docker-ide"
  },
  "4": {
    title: "2D Top Down Game",
    image: "",
    description: "A small 2D topdown game made with Godot, this is just a demo project to learn Godot.",
    link: "https://github.com/StefanLock/docker-ide"
  },
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