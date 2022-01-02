let btnStart = document.querySelector('.btn-start');
let btnAttack = document.querySelector('.btn-attack');
let my = document.getElementById('you');
let monster = document.getElementById('monster');
let punch = document.querySelector('.punch');
let specialPunch = document.querySelector('.specialPunch');
let health = document.querySelector('.health');
let stopping = document.querySelector('.stop');
let percentY = document.querySelector('.percentYou');
let percentM = document.querySelector('.percentMonster');

let pvY = 100;
let pvM = 100;

percentY.innerHTML = pvY;
percentM.innerHTML = pvM;

console.log('percentM:', percentM)

let attackMonster = Math.floor(Math.random() * ((10 - 5) + 1) + 5);
let attackMy = Math.floor(Math.random() * ((10 - 3) + 1) + 3);
let specialMy = Math.floor(Math.random() * ((20 - 10) + 1) + 10);


function hideBtnAttacks () {
  btnStart.hidden = false;
  btnAttack.hidden = true;
}

hideBtnAttacks()

function starting () {
  btnStart.hidden = true;
  btnAttack.hidden = false;
  my.value = 100;
  monster.value = 100;
  pvY = 100;
  pvM = 100;
  percentY.innerHTML = pvY;
  percentM.innerHTML = pvM;
}

btnStart.addEventListener('click', starting)

function attack () {
  my.value -= attackMonster;
  pvY -= attackMonster;
  percentY.innerHTML = pvY;
  console.log('percentM:', percentM)
  monster.value -= attackMy;
  pvM -= attackMy;
  percentM.innerHTML = pvM;
  console.log('percentY:', percentY)

  checkingScore()

}

punch.addEventListener('click', attack)

function specialAttack () {
  my.value -= attackMonster;
  pvY -= attackMonster;
  percentY.innerHTML = pvY;
  console.log('percentM:', percentM)
  monster.value -= specialMy;
  pvM -= specialMy;
  percentM.innerHTML = pvM;
  console.log('percentY:', percentY)

  checkingScore()

}

specialPunch.addEventListener('click', specialAttack)

function heal () {
  if ((pvY += 10) >= 100) {
    pvY = 100;
  } else {
    pvY += 10;
  }
  pvY -= attackMonster;
  pvM;
  console.log('attackMonster:', attackMonster)
  console.log('pvY:', pvY)
  percentY.innerHTML = pvY;
  my.value = pvY;

  percentM.innerHTML = pvM;
  monster.value = pvM
  
  checkingScore()
}

health.addEventListener('click', heal)

function giveUp () {
  if(confirm('You are give up, new game ?')) {
    hideBtnAttacks()
  }
  my.value = 100;
  monster.value = 100;
  pvY = 100;
  pvM = 100;
  percentY.innerHTML = pvY;
  percentM.innerHTML = pvM;
}

stopping.addEventListener('click', giveUp)

function checkingScore () {
  if (pvY <= 0) {
    if(confirm('Monster is winner, new game?')) {
      starting()
      // giveUp()
    } else {
      giveUp()
      hideBtnAttacks()
    }
  } else if (pvM <= 0) {
    if(confirm('You is winner, new game?')) {
      starting()
      // giveUp()
    } else {
      giveUp()
      hideBtnAttacks()
    }
  }
}

// if (my.value > monster.value) {
//   alert(`${you} is Winner`)
// } else {
//   alert(`${monster} is Winner`)
// }