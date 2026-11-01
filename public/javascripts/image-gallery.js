document.getElementById('imageModal').addEventListener('show.bs.modal', (event) => {
  const thumbnail = event.relatedTarget.querySelector('img');

  document.getElementById('modelCurrentCaption').textContent = thumbnail.getAttribute('alt');
  document.getElementById('modalCurrentImage').setAttribute('src', thumbnail.getAttribute('src'));
});
