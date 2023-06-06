function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

ready(function() {
  const thumbnails = document.querySelectorAll('.img-thumbnail');

  for (let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i];

    thumbnail.addEventListener('click', () => {
      const currentModelCaption = document.getElementById("modelCurrentCaption");
      const currentModalImage = document.getElementById("modalCurrentImage");

      const caption = thumbnail.getAttribute("alt");
      const image = thumbnail.getAttribute("src");

      currentModelCaption.innerHTML = caption;
      currentModalImage.setAttribute("src", image);
    });
  }
});
