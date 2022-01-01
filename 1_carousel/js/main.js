let carousel = document.querySelectorAll('.imgCarousel');
let btnNext = document.getElementById('btn-next');
let btnPrevious = document.getElementById('btn-previous');
let i = 0;
let currentImg = carousel[i];

function iterationImg () {
  for (const iterator of carousel) {
    iterator.style.display = 'none';
    currentImg.style.display = 'block';
  }
}

iterationImg()

function next () {
  currentImg = carousel[i];
  i++
  console.log('currentImg:',i , currentImg)
  if (i >= carousel.length) {
    i = 0;
  }
  iterationImg()
}

function previous () {
  currentImg = carousel[i];
  i--;
  iterationImg()
}

btnNext.addEventListener('click', next);
btnPrevious.addEventListener('click', previous);