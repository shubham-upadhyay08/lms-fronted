function filterNotes(subject) {
  const cards = document.querySelectorAll('.note-card');
  cards.forEach(card => {
    if (subject === 'all' || card.classList.contains(subject)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Optional preview functionality for admin form
document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Note uploaded successfully (UI only - backend not connected).");
});