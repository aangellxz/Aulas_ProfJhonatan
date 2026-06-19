//1

// let idades = [-4, 13, 10, 16, 17, 30, 59, 70]

// for (let i= 0; i < idades.length; i++){
//     let idade = idades[i]
//  if(idade < 0 ){
//     console.log("Erro");
//     continue;
// } 

//   if( idade <= 12){
//     console.log("Criança");
// } else if (idade <= 17) {
//         console.log("Adolescente");
// }
//  else if (idade <= 59) {
//         console.log("Adulto");
//  }
//  else {
//     console.log("Idoso");
//  }
// }


let numero = 5;
let soma = 0;
let resultados = [];


for (let i = 1; i <= 10; i++) {
    resultados.push(numero * i);
}


for (let i = 0; i < resultados.length; i++) {
    let valor = resultados[i];

    if (valor % 3 === 0) {
        continue; 
    }

    console.log(valor);
    soma += valor;
}


console.log("Soma:", soma);