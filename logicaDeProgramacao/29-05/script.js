// ---------------------- ATV 1 -------------------------------//

// function centimetros(metros) {
//     let converter = 100 * metros
//     return converter
// };

// console.log(centimetros(5));


// function emCentimetros(...metros) {
//     // TODO: devolva metros vezes 100
//     let resultado = "";

//     for (let metro of metros) {
//         resultado += `${metro}m -> ${(metro * 100).toFixed(0)}cm \n`;
//     }

//     return resultado;
// }

// alert (emCentimetros(2, 20, 1, 30, 100, 200)); // deve imprimir 200


// let n1 = 2;
// let n2 = 10;

// const media = (n1, n2) => {
//     n1 = Number(prompt("Informe a primeira nota"));
//     n2 = Number(prompt("Informe a segunda nota"));
//     alert((n1 + n2) / media.length);
// };



// const totalItem = (preco, qnt) =>{
//       preco = Number(prompt("Informe o preço do item"));
//       qnt = Number(prompt("Informe a quantidade que deseja"));
//       alert (`Tá aqui!!!! ${preco * qnt}`);
// };

// ---------------------- ATV 1 (FIM) -------------------------------//

// ---------------------- ATV 2 (INICIO) -------------------------------//
// Carlos, do e-commerce, cobra frete por quilo. A taxa normal é R$ 2,50 por kg, mas em alguns casos vem outra. Crie frete com a taxa tendo valor padrão 2.5.


// function frete(kg, taxa = 2.5) {
//     return`O valor fica de ${kg * taxa}`;
    
//   // TODO: devolva kg vezes taxa
// };
// console.log(frete(4))        // deve imprimir 10  (usa 2.5)
// console.log(frete(4, 3))     // deve imprimir 12



// Mariana, do RH, calcula o bônus de 10% do salário. Guarde a regra numa função anônima dentro da variável bonus.

// const bonus = (salario) => {
//            let bonus = 0.1;
//           return salario * bonus;
// }

//  /* TODO: funcao anonima que devolve salario * 0.1 */

// console.log(bonus(2000).toFixed(2))   // deve imprimir 200



// Maria, do atendimento, monta saudações automáticas. Crie saudacao que recebe um nome e um período com valor padrão "dia", e devolve a frase.

// function saudacao(nome, periodo = "dia") {
//     return `Bom ${periodo}, ${ nome}!`
// }
// console.log(saudacao("Ana"))            // Bom dia, Ana!
// console.log(saudacao("Ana", "tarde"))   // Bom tarde, Ana!

// ---------------------- ATV 2 (FIM) -------------------------------//
// ---------------------- ATV 3 (INICIO) -------------------------------//


// Rafael, da logística, quer o código mais enxuto. Reescreva a função abaixo como uma arrow de uma linha (sem chaves, sem return).

   original:
   const pesoTotal = function (caixas) {
      return caixas * 15
   };

   // 3.1 - Reescrita
const pesoTotal = (caixas) => caixas * 15;
console.log(pesoTotal(3));

// Exercício 3.2 — Desconto com arrow
const comDesconto = (valor, desconto) => valor - (valor * desconto);

console.log(comDesconto(200, 0.25));

// Exercício 3.3 — Uma função usando a outra
const comImposto = (preco) => preco * 1.1

function precoFinal (preco, frete) {
    return comImposto(preco) + frete;
}
console.log(precoFinal(100, 20));

// Exercício 4.1 — Soma de quantas vendas vierem
function somarVendas(...vendas) {
    let total = 0;

    for(let venda of vendas){
        total += venda;
    }
    return total;
}
console.log(somarVendas(50, 30, 20))       // 100
console.log(somarVendas(10, 10, 10, 10))   // 40

// Exercício 4.2 — Média de quantas notas vierem
function mediasNotas(...notas){
    let total = 0;

    for(let nota of notas){
       total += nota
    }
    return total / notas.length
};
console.log(mediasNotas(6, 8, 10)) 

// Exercício 4.3 — Conserte o relatório vazio
const total = (preco, qtd) => preco * qtd 
console.log(total(9, 4))   // imprime undefined — deveria imprimir 36



