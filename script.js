const cards = document.querySelectorAll('.card');
const modal = document.getElementById('player-modal');
const closeModal = document.getElementById('close-modal');

// Modal elements
const modalName = document.getElementById('modal-name');
const modalStrike = document.getElementById('modal-strike');
const modalMatches = document.getElementById('modal-matches');
const modalJersey = document.getElementById('modal-jersey');
const modalPerformance = document.getElementById('modal-performance');

// Add click listeners to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const data = JSON.parse(card.dataset.player);
    modalName.textContent = data.name;
    modalStrike.textContent = data.strikeRate;
    modalMatches.textContent = data.matches;
    modalJersey.textContent = data.jersey;
    modalPerformance.textContent = data.performance;
    modal.style.display = 'block';
  });
});

// Close modal
closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
