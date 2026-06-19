let inicio = Number(prompt("Início do intervalo:"));
let fim = Number(prompt("Fim do intervalo:"));

let soma = 0;       // acumulador
let quantidade = 0; // contador

for (let i = inicio; i <= fim; i++) {
    soma += i;
    quantidade++;
}

let media = soma / quantidade;

console.log("Soma:", soma);
console.log("Quantidade:", quantidade);
console.log("Média:", media);