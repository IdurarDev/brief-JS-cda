let carousel = document.querySelectorAll('.imgCarousel');
let btnPrevious = document.getElementById('btn-previous');
let btnNext = document.getElementById('btn-next');
let i = 0;
let currentImg = carousel[i];
console.log('out loop for:', currentImg);

// function iterationImg () {
//   for (const iterator of carousel) {
//     iterator.style.display = 'none';
//     currentImg.style.display = 'block';
//   }
// }

// iterationImg()

function iterationImg () {
  for (i; i < carousel.length; i++) {
    carousel[i].style.display = 'none';
    currentImg[i].style.display = 'block';
    console.log('in loop for:', carousel[i]);
  }
}
iterationImg()

function next () {
  i++
  currentImg = carousel[i];
  iterationImg()
}

function previous () {
  i--;
  currentImg = carousel[i];
  iterationImg()
}


btnNext.addEventListener('click', next);
btnPrevious.addEventListener('click', previous);

