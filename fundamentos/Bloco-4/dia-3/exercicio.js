//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let n = 5;
let a = "";

/*if (n > 1){
    for(i = 0; i < n; i += 1){
        let a = ""
        for (j =0; j < n; j += 1){
            a = a + "*"
        }
        console.log(a);
    }
} else {
    console.log('N precisa ter valor n > 1');
}*/


//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
/*if (n > 1){
    for(i = 0; i < n; i += 1){
        a += "*"
        console.log(a);
    }
} else {
    console.log('N precisa ter valor n > 1');
}*/

//3- Agora inverta o lado do triângulo.
if (n > 1){
    for(i = 0; i < n; i += 1){
        let a = "";
        for (j = n - 1; j > i; j -= 1){
            a = a + " ";
        }
        for (j = 0; j <= i; j += 1){
            a = a + "*";
        }
        console.log(a);
    }
} else {
    console.log('N precisa ter valor n > 1');
}