let input = document.getElementById('nbr');
console.log('input:', input)
let para = document.querySelector('.playing');
let pOne = document.querySelector('.p1');
let pTwo = document.querySelector('.p2');
let btnOne = document.querySelector('.player-one');
let btnTwo = document.querySelector('.player-two');
let reset = document.querySelector('.reset');


input.value = 5;
para.innerHTML = 'Playing to: ' + input.value;


btnOne.addEventListener('click', function () {
  if (pOne.textContent !== input.value) {
    pOne.innerHTML++;
  } else {
    btnOne.removeEventListener('click', function (){})
  }
})

btnTwo.addEventListener('click', function () {
  if (pTwo.textContent !== input.value) {
    pTwo.innerHTML++;
  } else {
    btnTwo.removeEventListener('click', function (){})
  }
})

reset.addEventListener('click', function () {
  pOne.innerHTML = 0;
  pTwo.innerHTML = 0;
})


// function playerOne (nbr) {

// }

// playerOne(input.value);

// function playerTwo (nbr) {

// }

// playerTwo(input.value)

// function reset () {

// }