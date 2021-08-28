// $(".stars").mousemove(function (e) {
//  var gLeft = $(".stars .stars-ghost").offset().left,
//   pX = e.pageX;

//  console.log(gLeft, pX);

//  $(".stars .stars-ghost").width(pX - gLeft);

// });

const numberInput = document.querySelector('input');
const starRatingWrapper = document.querySelector('.star-rating');
const frontStars = document.querySelector('.front-stars');

const rate = e => {
 const percentage = e.target.value + '%';

 starRatingWrapper.title = percentage;
 frontStars.style.width = percentage;
};

numberInput.addEventListener('click', rate);
numberInput.addEventListener('keyup', rate);