var buttton = document.getElementById('button');

var count = 0;

button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
