let inputText = document.getElementById('addTodo');
let inputBtn = document.getElementById('btn');
let ulElmt = document.getElementById('addLi')


inputBtn.addEventListener('click', function createLi() {
  let liElmt = document.createElement('li');
  liElmt.textContent = inputText.value;
  ulElmt.append(liElmt);
  inputText.value = '';
})