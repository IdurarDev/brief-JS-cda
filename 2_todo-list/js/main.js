let inputText = document.getElementById('addTodo');
let inputBtn = document.getElementById('btn');
let ulElmt = document.getElementById('addLi')


inputBtn.addEventListener('click', function createLi() {
  if (inputText.value == '') {
    inputBtn.removeEventListener('click')
  }
  let liElmt = document.createElement('li');
  liElmt.textContent = inputText.value;
  ulElmt.append(liElmt);
  inputText.value = '';
})