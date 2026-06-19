//1 Classificador de Faixa Etária Dado um array com as idades de 8 pessoas definido no código, percorra-o com um laço for e exiba, para cada posição, se a pessoa é criança (0–12), adolescente (13–17), adulto (18–59) ou idosa (60+). Se alguma idade for negativa, exiba uma mensagem de erro para aquela posição e pule para a próxima com continue.

// idades = [18, 20, 22, -60, 70, 13, 9, 5]

// for (let idade of idades){
//     if(idade >= 0 && idade <= 12){
//         console.log("Criança")
//     } else if(idade >= 13 && idade <= 17){
//          console.log("Adolescente")
//     } else if(idade >= 18 && idade <= 59){
//         console.log("Adulto")
//     } else if(idade >= 60){
//          console.log("Idoso")
//     } else{
//          console.log("Burro. Essa não é a sua idade!!!!!!!!!!!!!")
//     }
// }



// 2 - Tabuada Filtrada Dado um número inteiro informado pelo usuário, use um laço for para gerar sua tabuada do 1 ao 10 e armazene cada resultado em um array com push. Depois, percorra o array e exiba apenas os valores que não são múltiplos de 3, pulando-os com continue. Ao final, exiba também a soma dos valores exibidos.

// let numero = 5
// let resultados = []
// let somatoria = 0

// for (let i = 1; i <= 10; i++) {
//     resultados.push(i * numero);
// }

// for (let numero of resultados) {
//     if (numero % 3 == 0) continue;
//     somatoria += numero;
//     console.log(numero);
// }

// console.log(somatoria);


// 3 - Contador de Aprovados Dado um array com as notas de 10 alunos, percorra-o com um laço for e conte quantos foram aprovados (nota >= 7), quantos ficaram em recuperação (5 <= nota < 7) e quantos reprovaram (nota < 5). Exiba os três totais ao final.

let notas = [1,2,3,4,5,6,7,8,9,10]
let aprovados = 0, recuperacao = 0, reprovaram = 0;


for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];

    if(nota >= 7){
     aprovados ++;
} else if (nota >= 5 && nota < 7){
        recuperacao++;
} else{
    reprovaram++;
}
}


console.log(`Aprovados: ${aprovados}`);
console.log(`Recuperação: ${recuperacao}`);
console.log(`Reprovados: ${reprovaram}`);