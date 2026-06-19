// PASSO 1 · Função normal — media2
//
// Declare, com a palavra-chave function, uma função
// chamada media2 que:
//   - recebe duas notas como parâmetros
//   - retorna a média das duas (a soma dividida por 2)
//
// Depois, imprima no console o resultado de media2(7, 9).
//
// Esperado: Média de Ana: 8

// function media2(...notas){
//     let acc = 0;
//     for (let nota of notas){
//         acc += nota;
//     }
//     return (acc) / notas.length
// };

// alert(media2(7, 10));

// PASSO 2 · Parâmetro com valor padrão — pontuar
//
// Crie uma função chamada pontuar que recebe:
//   - nota
//   - peso, com valor padrão 1 (quando não for informado)
// Ela retorna a nota multiplicada pelo peso.
//
// Teste chamando pontuar(8) e depois pontuar(8, 2).
//
// Esperado:
// Trabalho (peso 1): 8
// Prova (peso 2): 16

// function pontuar(nota, peso = 1, notaMultiplicada){
//     nota = Number(prompt("Digite a sua nota: "));

//     if(peso == null){
//          return alert(`A sua nota é: ${nota}`);
//     } else if( peso == 2){   
//     notaMultiplicada = nota * peso;

//     return alert(`A sua nota multiplicada é: ${notaMultiplicada}`);
//     };
// };

// function pontuar (nota, peso = 1){
//     return nota * peso;
// };

// console.log(`Trabalho (peso 1): ${pontuar(8, 1)}`);
// console.log(`Prova (peso 2): ${pontuar(8, 2)}`);


// PASSO 3 · return antecipado — validar
//
// Crie uma função validar(nota) que:
//   - se a nota for menor que 0 OU maior que 10, devolve null
//     imediatamente (antes de qualquer outra coisa)
//   - caso contrário, devolve a string "ok"
//
// Teste com os valores 7, 15 e -2.
//
// Esperado:
// ok
// null
// null

 