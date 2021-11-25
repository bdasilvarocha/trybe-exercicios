console.log(document.getElementById('elementoOndeVoceEsta'));
document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'blue';
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.parentElement);
document.getElementById('primeiroFilhoDoFilho').innerHTML= '<p> Esse eh o primeiro filho, do filho.</p>';
console.log(document.getElementById('primeiroFilhoDoFilho'));
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').parentElement);

let pai = document.querySelector('#pai');
let quintoFilho = document.createElement('section');
quintoFilho.id = 'quintoFilho';
pai.appendChild(quintoFilho);

console.log(document.getElementById('pai'));


