// let eu = ["Ângela", "Dos Santos", "01/02/2008"];
// let familia = ["Carolina", "Gabriel"];
// let parentes = ["Mara Nubia"];


// // Função normal
// function dadosPessoais(dadosRecebidos){
//     for(let item of dadosRecebidos){
//             console.log(item);
//             alert(item)
//     }
//     return;
// };

// dadosPessoais(familia);
//

// let filaDoBanheiro = [];

// const exibirFilaDoBanheiro = () => {
//      for(let item of filaDoBanheiro){
//             console.log(item);
//             alert(item)
//     }
//     return;
// };

// const adicionarNaFila = () => {
//       const nome = prompt("Informe o nome da pessoa: ");
//       filaDoBanheiro.push(nome);
// };

// const retirarDaFila = () => {
//       filaDoBanheiro.pop("");
// };



// const valorAleatorio = 20;
//  let palpite = 0;

// const adivinharValor = () => {
//      palpite = prompt("De o seu palpite: ");
//      validarPalpite(palpite);
// };

// const validarPalpite = (palpiteRecebido) => {
//     if(palpiteRecebido == valorAleatorio){
//          alert(`Acertou o palpite,o valor era ${palpiteRecebido}`);
//         return ;
//     } 
//     if (palpiteRecebido > valorAleatorio){
//         alert("ERROU, o valor correto é menor!");
//         return;
//     }
//     if (palpiteRecebido < valorAleatorio){
//         alert("ERROU, o valor correto é maior!");
//         return;
//     }

       
let lista = ["Arroz", "feijão", "batata", "macarrrão", "maionese","molho de tomate"];
// const listaCapsLock = lista.map((x) => {
//              return x.toUpperCase();
// });
// console.log(listaCapsLock);

numeros = [1,2,3,4,5,6,7,8,9,10]

// const numerosRepetidos = numeros.map((x) => {
//     return x * 2;
// });
// console.log(numerosRepetidos);

const numerosDuplicados = numeros.map((x) => {
    return x ** 2;
});
console.log(numerosDuplicados);


