document.addEventListener('DOMContentLoaded', () => {
  const playerModal = document.getElementById('playerModal');
  if (!playerModal) return;

  playerModal.addEventListener('show.bs.modal', event => {
    const clickTarget = event.clickEvent ? event.clickEvent.target : null;

    if (clickTarget && clickTarget.closest('[data-bs-toggle="popover"]')) {
      event.preventDefault();
      return;
    }

    const card = event.relatedTarget;
    if (!card) return;

    document.getElementById('modalPlayerName').textContent = card.dataset.nombre || '';
    document.getElementById('modalPlayerImg').src = card.dataset.img || '';

    document.getElementById('modalStat1Label').textContent = card.dataset.stat1Label || '';
    document.getElementById('modalStat1Value').textContent = card.dataset.stat1Value || '';

    document.getElementById('modalStat2Label').textContent = card.dataset.stat2Label || '';
    document.getElementById('modalStat2Value').textContent = card.dataset.stat2Value || '';

    document.getElementById('modalStat3Label').textContent = card.dataset.stat3Label || '';
    document.getElementById('modalStat3Value').textContent = card.dataset.stat3Value || '';
  });
});