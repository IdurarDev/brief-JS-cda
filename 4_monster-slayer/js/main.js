let btnStart = document.querySelector('.btn-start');
let btnAttack = document.querySelector('.btn-attack');
let my = document.getElementById('you');
let monster = document.getElementById('monster');
let punch = document.querySelector('.punch');
let specialPunch = document.querySelector('.specialPunch');
let health = document.querySelector('.health');
let stopping = document.querySelector('.stop');

let attackMonster = 10;
let specialMonster = 5;
let attackMy = 5;
let specialMy = 15;
let healMy = 10;
let damageMonster = 6;

function hideBtnAttack () {
  btnStart.hidden = false;
  btnAttack.hidden = true;
}

hideBtnAttack()

function starting () {
  btnStart.hidden = true;
  btnAttack.hidden = false;
}

btnStart.addEventListener('click', starting)
function attack () {
  my.value -= attackMonster;
  monster.value -= attackMy;
}

punch.addEventListener('click', attack)

function specialAttack () {
  my.value -= specialMonster;
  monster.value -= specialMy;
}

specialPunch.addEventListener('click', specialAttack)


function heal () {
  my.value += healMy
  my.value -= damageMonster
}

health.addEventListener('click', heal)

function giveUp () {
  my.value = 100;
  monster.value = 100;
  hideBtnAttack()
}

stopping.addEventListener('click', giveUp)

