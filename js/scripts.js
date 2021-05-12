function changeMyColor() {
  var button = document.getElementById('myButton'); 

  if (button.classList.contains('orange')) {
      button.classList.remove('orange');
  } else {
    button.className = 'orange';
  }
}
