let numeros = [1,2,3,-4,-5,-6]

let soma = 0;
let quantidade = 0;

console.log("Números ímpares encontrados:");

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero % 2 === 0) {
        continue;
    }

    console.log(numero);
    soma += numero;
    quantidade++;
}

console.log("Total de ímpares:", quantidade);
console.log("Soma dos ímpares:", soma);