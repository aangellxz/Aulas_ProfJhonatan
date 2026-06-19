// const valores = [12, 50, 5, 6, 8, 654, 564, 68, 11, 3, 6, 40, 0]

// // const nomesModificados = nomes.map((n) => n.toUpperCase())
// // const valoresFiltrados = valores.filter((n) => { return n > 10 })

// const somatorio = valores.reduce((acc, valor) => acc += valor, 0)

// console.log(somatorio);

// EXERCÍCIOS //
// 1 - 
// const numeros = [10, 20, 30, 40, 50];

// const triplo = numeros.map(a => a * 3);

// console.log(triplo);

// // 2 - 
// const maiores40 = triplo.filter((n) => n > 40);
// console.log(maiores40);

// // 3 - 

//  const somatorio = numeros.reduce((acc, valor = 0) => {
//      return  acc += valor 
// });
// console.log(somatorio);


// let resultado = numeros.map(a => a * 3).filter((n) => n > 40).reduce((acc, valor = 0) => acc += valor );
// console.log(resultado);



// Atividades p entregar //

//  1.1 const nums = [2, 5, 10];
// const triplo = nums.map((n) => n * 3);
// console.log(triplo);   // [6, 15, 30]

// 1.2 const nomes = ['ana', 'bruno', 'carla'];
//         const maiusculas = nomes.map((nome) => nome.toUpperCase());
//         console.log(maiusculas);   // ['ANA', 'BRUNO', 'CARLA']

// 1.3 const nomes = ['Ana', 'Bruno', 'Carla'];
//         const tamanhos = nomes.map((nome) =>nome.length);
//         console.log(tamanhos);   // [3, 5, 5]

// 1.4 const idades = [15, 22, 18, 31, 17];
//         const adultos = idades.filter((idade) => idade > 18);
//         console.log(adultos);   // [22, 31]

// 1.5 const notas = [8, 5, 10, 3, 6];
//         const aprovadas = notas.filter((nota) =>nota >= 6);
//         console.log(aprovadas);   // [8, 10, 6]

// 1.6 const palavras = ['sol', 'janela', 'computador', 'rede'];
//         const longas = palavras.filter((palavra) =>palavra.length > 6);
//         console.log(longas);   // ['computador']

// 1.7 const gastos = [30, 12, 8, 50];
//         const total = gastos.reduce((acc, curr) => acc += curr, 0);
//         console.log(total);   // 100

// 1.8 const notas = [7, 10, 4, 9];
//         const maior = notas.reduce((acc, curr) => (curr > acc ? curr :acc), 0);
//         console.log(maior);   // 10

// 1.9 const nums = [1, 2, 3, 4];
//         const produto = nums.reduce((acc, curr) => acc *= curr, 1);
//         console.log(produto);   // 24

// 1.0 const precos = [10, 50, 20, 100];
//         const total = precos
//           .filter((p) =>p > 20)
//           .map((p) =>p * 0.9)
//           .reduce((acc, p) => acc += p, 0);
//         console.log(total);   // 135  (50 e 100 passam; viram 45 e 90; somam 135)

// 2.1 const celsius = [0, 25, 100];
//         const fahrenheit = celsius.map((celsius)=>{
//                return celsius * 9/5 + 32;
//         });
//         console.log(fahrenheit);   // deve imprimir [32, 77, 212]

// 2.2 const numeros = [7, 8, 12, 3, 20];
//         const pares = numeros.filter((p)=> {
//             return p % 2 === 0
//         })
//         console.log(pares);   // deve imprimir [8, 12, 20]

// 2.3 const pontos = [120, 80, 200, 50];
//         const total = pontos.reduce((mais, acc = 0)=>{
//             return mais += acc;
//         })
//         console.log(total);   // deve imprimir 450

// 2.4 const partes = ['bom', 'dia', 'turma'];
//         // escreva o codigo aqui (dica: acc + ' ' + curr, e use .trim no fim se sobrar espaco)
//         const frase = partes.reduce((acc, curr)=>{
//                return  acc + ' ' + curr
//         });
//         console.log(frase);   // deve imprimir "bom dia turma"

// 2.5 const precos = [5, 8, 12];
//         const etiquetas = precos.map(preco => `R$${preco}`)
//         console.log(etiquetas);   // deve imprimir ['R$ 5', 'R$ 8', 'R$ 12']

// 3.1 const idades = [15, 18, 22, 12, 40];
//         const quantosAdultos = idades.filter((i)=> i >= 18).reduce((acc, valor)=> acc += 1, 0);
//         console.log(quantosAdultos);   // deve imprimir 3

// 3.2 const palavras = ['sol', 'janela', 'rede', 'computador'];
//         const longasMaiusc = palavras.filter((letras)=> letras.length > 4).map((letras)=>letras.toUpperCase())
//         console.log(longasMaiusc);   // deve imprimir ['JANELA', 'COMPUTADOR']

// 3.3 const salarios = [1500, 800, 3000, 2000];
//         // escreva o codigo aqui
//         console.log(totalFolha);   // deve imprimir 7150  (1500, 3000 e 2000 passam; viram 1650, 3300 e 2200)

// 4.1 const gastos = [2000, 50, 20, 100];

// const comDesconto = gastos.map((g) => g * 0.9)
// console.log(comDesconto)

// const total = gastos.reduce((acc,gastoTotal) => acc+= gastoTotal)  
// console.log(total)

// const caros = gastos.filter((g) => g > 100)
// console.log(caros.length)


//  4.2 const notas = [9, 4, 7, 3];

// const qtdAprovados = notas.filter((n) => n >= 6).length;

// const media = notas.reduce((acc, n) => acc + n, 0) / notas.length;

// const reprovadas = notas.filter((n) => n < 6);

// console.log(qtdAprovados); // 2
// console.log(media);        // 5.75
// console.log(reprovadas);   // [4, 3]