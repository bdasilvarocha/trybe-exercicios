// 1. funcao palindromo
let a = "desenvolvimento";

function verificaPalindromo(a){
    let reverso = a.split("").reverse().join();
    if(reverso === a){
        return true;
    }else {
        return false;
    }
};
console.log(verificaPalindromo(a));

// 2. Funcao maior valor
let array = [2, 4, -6, 700, 10, 100, -3];

function maiorValor(array){
    let a = 0;
    for (let i in array){
        if (array[a] < array[i]){ 
            a = i;
        }     
    }
    return a;
}
console.log (maiorValor(array));