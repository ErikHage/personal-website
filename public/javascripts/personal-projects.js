$(document).ready(function() {
  const currentModelCaption = $('#modelCurrentCaption');
  const currentModalImage = $('#modalCurrentImage');

  $('.img-thumbnail').click(function() {
    const clickedImage = $(this);

    currentModalImage.attr('src', clickedImage.attr('src'));
    currentModelCaption.html(clickedImage.attr('alt'));
  });
});
