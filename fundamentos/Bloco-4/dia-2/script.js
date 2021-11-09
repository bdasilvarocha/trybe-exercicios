let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

// for (let index = 0; index < numbers.length; index += 1){
//    console.log (numbers[index]);}

/*for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
    console.log(soma);

let media = soma / numbers.length;
console.log(media);*/

/*if (media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}*/

/*let maior = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maior){
        maior = numbers[index];
    } 
}
console.log(maior);*/

/*let impares = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 == 1) {
        impares +=1;
    }
}
if (impares > 0){
    console.log('O array possui ' + impares + ' valores impares');
} else{
    console.log('Nenhum valor impar foi encontrado');
}*/

/*let menor = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] < menor){
        menor = numbers[index];
    } 
}
console.log(menor);*/

let newNumbers = [];
for (let index = 1; index <= 25; index += 1){
    newNumbers.push(index);
}
//console.log(newNumbers);


for (let index = 0; index < newNumbers.length; index += 1){
    console.log (newNumbers[index] / 2);
}
