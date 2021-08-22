import '../Product/product.css';

const request = new XMLHttpRequest();
const container = document.querySelector('#main');

request.open('get', '../Product/product.html');
request.send();

request.onload = function () {
 if (this.status === 200) {
  container.innerHTML = request.responseText;
 }
 else {
  console.warn('It\'s not working');
 }
}

