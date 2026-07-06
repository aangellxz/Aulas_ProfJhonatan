// const salaDeAula  ={
//     alunos : [
//         {nome : "Pedro", data_nascimento: "13/07/2006"},
//         {nome : "Felipe", data_nascimento: "21/01/2000"}
//     ],

//     turma : "PSII - 2026/1",
//     animo : "Triste"
// };

// const cantina = ["Coxinha de costela", "Mini-pizza", "Suco de Laranja"];

// const {turma, animo} = salaDeAula;
// const [item1, item2] =  cantina

// console.log(`Turma: ${turma}, Ânimo: ${animo}`);

// console.log(`Item 1 = ${item1}; \nItem 2 = ${item2}`);


// Desestruturação

const celular = {modelo : "Iphone", preco : 5000};
const {preco} = celular;

// console.log(preco);
// Spread Operador

const cores = ["Azul", "Vermelho"];
const todas = [...cores, "Verde"];

// console.log(todas);

//

// const senai = ["Jubileu", "Plaza", "Eros", "Jhonatan"];
// const sesi = ["Laura", "Barbara", "Carla", "não_tem_cibele"];
// const fiesc = [... senai, ... sesi, "Luis", "Pedrinho", "Rafael", "Anderson"];

// console.log(`SENAI : ${senai}; \nFIESC : ${fiesc}`);

const senai = {
    blocos : ["A", "B", "C", "D", "E", "F"],
    salas : [100, 200, 300, 400, 500],
    cursos : {
        TI: ["TIIN", "DESI"],
        Engenharia : ["Edificações", "Mecânica"]
    }
};

// Unir os blocos, como o exemplo:  'Bloco A: 100', 'Bloco B: 200'

// const cursosForaDoSenai = {...senai.blocos};
// const [item1, item2, item3] = cursosForaDoSenai;
// // console.log(cursosForaDoSenai);

// console.log(`Item 1 = ${item1}; \nItem 2 = ${item2}`);

const espacos = senai.blocos.map((bloco, i) => `Bloco ${bloco}: ${senai.salas[i]}`);

const {cursos} = senai;

const { cursos: { TI } } = senai;


// console.log(espacos);
// console.log(cursos);
// console.log(TI);

const {blocos, salas} = senai;
console.log(senai);

for (let i = 0; i < blocos.length, i++){
    console.log(`Bloco ${blocos[i]}: ${salas[i]}`);
};

const bibloteca = {
    livro : [
    { titulo : "Mágico de oz!"}, 
    }
    ]
   
}
