document.addEventListener('DOMContentLoaded', () => {
  const fichajes = document.querySelectorAll('[data-bs-toggle="popover"]');

  fichajes.forEach(btn => {
    new bootstrap.Popover(btn, {
      html: true,
      trigger: 'focus',
      placement: 'right'
    });

    btn.addEventListener('click', e => e.stopPropagation());
  });
});