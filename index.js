const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl) {
  let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
}

function imageFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-url');
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    // More code to follow.
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  let thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  let thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

window.addEventListener('load', initializeEvents);

$('.nav-link').click(function() {
  $('.nav-link').removeClass("active");
  $('li.nav-item.active').removeClass("active");
  $(this).addClass("active"); 
})