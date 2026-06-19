//   const episodios = [
//     ["Cidades Invisíveis",  "Cultura",     42, 18500, 4.7, true ],
//     ["Algoritmos do Dia",   "Tecnologia",  28, 31200, 4.9, true ],
//     ["Cozinha Suburbana",   "Gastronomia", 55,  9800, 4.3, true ],
//     ["Linha do Tempo",      "História",    67, 24100, 4.8, false],
//     ["Frequência Aberta",   "Tecnologia",  35, 12700, 4.1, true ],
//     ["Boca Livre",          "Gastronomia", 48,  5400, 3.9, true ],
//     ["Memórias de Bairro",  "Cultura",     51, 16800, 4.6, true ],
//     ["Bits & Bytes",        "Tecnologia",  22, 42300, 4.9, true ],
//     ["Receitas de Família", "Gastronomia", 38,  7200, 4.2, false]
//   ];


// ATV 1

// console.log( "ANTES: " + episodios.length);

// let episodiosFormatados = episodios.map(
//       (item) => {
//         return `${item[0]} (${item[1]}) - ${item[2]} min`
//       }
// )
// console.log(episodiosFormatados);
// console.log("DEPOIS: "+ episodios.length);


// ATV 2

// const formatados = episodios.map(item => {

//   const titulo = item[0];
//   const duracao = item[2];
//   const minutos = duracao % 60;
//   const horas = Math.floor(duracao / 60);


//   return `${titulo}: ${horas}h ${minutos}min`;

// });

// console.log(formatados);

// ATV 3
const gradeAtual = episodios.filter(episodio => episodio[5] === true);

console.log("Quantidade de episódios ativos:", gradeAtual.length);

const titulos = gradeAtual.map(episodio => episodio[0]);

console.log(titulos.join("\n"));
