$(document).ready(function() {
  const currentModalImage = $('#modalCurrentImage');

  $('.img-thumbnail').click(function() {
    const clickedImage = $(this);

    currentModalImage.attr('src', clickedImage.attr('src'));
  });
});
