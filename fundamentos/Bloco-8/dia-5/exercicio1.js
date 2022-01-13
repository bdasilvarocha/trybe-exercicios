//Exercicio 01
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

console.log('Antes do spread', rectangles);
console.log('Depois do spread', ...rectangles);

rectangles.forEach((rectangle) => {
  // utilizacao do spread faz com que o array se espalhe podendo ser reconhecido os pares de valores
  rectangleArea(...rectangle) 
  console.log(rectangle[0] * rectangle[1]);
});

// Exercicio 02
// O rest eh usado para nao limitar o numero de parametros que utilizamos em funcoes.
// O reduce retorna um unico elemento de acordo com o comando inserido na funcao... Neste caso foi uma soma.
const sum = (...numbers) => numbers.reduce((acc, current) => acc + current);
console.log(sum(12, 3));
console.log(sum(15, 15, -10));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, -45));

// Exercicio 03
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
// Usando object destructuring para acessar de forma facil os valores dos objetos
// Aqui para nao haver conflito com as informcacoes, podemos fazer o destructuring direto nos parametros

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex));
console.log(personLikes(gunnar));

// Exercicio 04
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
// escreva filterPeople abaixo

const {name, nationality} = people;
const filterPeople = (nationality) => {
  if (nationality === 'Australian') {
    console.log(`${name} eh australiano`);
  }
};

const filteredPeople = people.filter(filterPeople);
console.log(filteredPeople)