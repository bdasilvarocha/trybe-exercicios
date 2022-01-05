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
  rectangleArea(...rectangles) 
  console.log(rectangle[0] * rectangle[1]);
});

// Exercicio 02
