// Knight Moves Chess Academy - about page JavaScript
// Lightbox gallery: click a photo to view it larger.

document.addEventListener("DOMContentLoaded", function () {

  const lightbox = document.getElementById("lightbox");
  const galleryButtons = document.querySelectorAll(".gallery-item");

  if (!lightbox || galleryButtons.length === 0 || typeof lightbox.showModal !== "function") {
    return;
  }

  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const previousButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");

  let currentIndex = 0;

  // Show the photo at the given position, wrapping round at either end
  function showImage(index) {
    currentIndex = (index + galleryButtons.length) % galleryButtons.length;

    const thumbnail = galleryButtons[currentIndex].querySelector("img");
    lightboxImage.src = thumbnail.getAttribute("src");
    lightboxImage.alt = thumbnail.getAttribute("alt");
    lightboxCaption.textContent =
      thumbnail.getAttribute("alt") +
      " (" + (currentIndex + 1) + " of " + galleryButtons.length + ")";
  }

  galleryButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      showImage(index);
      lightbox.showModal();
    });
  });

  closeButton.addEventListener("click", function () { lightbox.close(); });
  previousButton.addEventListener("click", function () { showImage(currentIndex - 1); });
  nextButton.addEventListener("click", function () { showImage(currentIndex + 1); });

  // Clicking the dark area outside the picture closes the lightbox
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) { lightbox.close(); }
  });

  // Arrow keys move between photos (Escape closes the dialog by default)
  lightbox.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") { showImage(currentIndex - 1); }
    if (event.key === "ArrowRight") { showImage(currentIndex + 1); }
  });

});
