let carousel = document.querySelectorAll('.imgCarousel');
let btnNext = document.getElementById('btn-next');
let btnPrevious = document.getElementById('btn-previous');
let i = 0;
let currentImg = carousel[i];
// console.log('out loop for:', currentImg);

function iterationImg () {
  for (const iterator of carousel) {
    iterator.style.display = 'none';
    currentImg.style.display = 'block';
    // console.log('iter:' ,iterator)
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
  console.log('img next:',i ,currentImg)
}

function previous () {
  currentImg = carousel[i];
  i--;
  // if (i <= carousel.length) {
  //   i = 0;
  //   console.log('img previous:',i ,currentImg)
  // }
  iterationImg()
}

btnNext.addEventListener('click', next);
btnPrevious.addEventListener('click', previous);