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


// let precos = [15.90, 8.50, 32.00, 5.75, 22.3]
// let somatorio = 0;

// for(let preco of precos) {
//     somatorio += preco;
// }
// console.log(`Somátorio de todos os precos: ${somatorio}`);


// let nomes = ["Yasmin", "Vyctoria", "Franciele", "Shakira", "Anitta", "Jubileu"] ;

// while(nomes.length > 0 ){
//     console.warn(nomes.shift(), "- removido");
// }
// console.log("Array nomes vazio!");


// let pares = []
// while(pares.length < 5){
//     const valorUsuario = parseInt(prompt("Informe um valor par:"));
//     if (valorUsuario % 2 == 0 ) continue;

//     pares.push(valorUsuario)
// }
// console.log(pares, "- O array tem tamanho", pares.length);

// let notas = [7, 4, 9, 6, 3, 8, 5, 10]
// let media = 0; 

// for( let nota of notas){
//     console.log(nota)
//     media += nota
// }
// media = media / notas.length
// let resultado = media >= 6 ? "Aprovado" : "Reprovado"

// console.log(`O aluno com as notas ${notas}, teve  a média ${media.toFixed(2)}. \nE foi ${resultado}.`);
