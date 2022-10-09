/*1°) Faça um algoritmo que contenha 3 vetores, o primeiro deve ser um vetor com 30 posições, onde irá conter números inteiros aleatórios. 
Após isso, separe esse vector em mais dois novos vetores onde no primeiro vector deve conter apenas os números pares e outro para números ímpares. Lembrando, você não deve alocar os valores manualmente, utilize um laço for ou while.
 */

let vetor1 = [];
let contador=0;
while(contador <= 29){
    let aleatorio = Math.random() * 100;
    vetor1.push(aleatorio.toFixed(0));
    contador++;
}

let vetor2 = vetor1.filter(retornaPar);
let vetor3 = vetor1.filter(retornaImpar);

console.log(vetor1);
console.log(vetor2);
console.log(vetor3);

function retornaPar(number){
    return number%2===0;
}


function retornaImpar(number){
    return !(number%2===0);
}

