let quantidadeAlunos = Number(prompt("Número de alunos (3 a 10):"));

// valida quantidade de alunos
while (quantidadeAlunos < 3 || quantidadeAlunos > 10 || isNaN(quantidadeAlunos)) {
    quantidadeAlunos = Number(prompt("Valor inválido! Digite entre 3 e 10:"));
}

let medias = [];

let somaTurma = 0;
let maiorMedia = -Infinity;
let menorMedia = Infinity;
let alunoMaior = 0;
let alunoMenor = 0;

// percorre alunos
for (let i = 1; i <= quantidadeAlunos; i++) {

    console.log(`\n--- Aluno ${i} ---`);

    let somaNotas = 0;
    let contadorNotas = 0;

    
    while (contadorNotas < 3) {

        let nota = Number(prompt(`Nota ${contadorNotas + 1} (ou -1 para encerrar):`));

        // encerra lançamento antecipado
        if (nota === -1) {
            console.log(`Encerrado com ${contadorNotas} nota(s).`);
            break;
        }

        // ignora nota inválida
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            console.log("Nota inválida! Digite entre 0 e 10.");
            continue; // volta pro início do while sem contar a nota
        }

        somaNotas += nota;
        contadorNotas++;
    }

    let media = contadorNotas > 0 ? somaNotas / contadorNotas : 0;

    medias.push(media);
    somaTurma += media;

    console.log(`Média do Aluno ${i}: ${media.toFixed(2)}`);

    // controle de maior e menor média
    if (media > maiorMedia) {
        maiorMedia = media;
        alunoMaior = i;
    }

    if (media < menorMedia) {
        menorMedia = media;
        alunoMenor = i;
    }
}


console.log("RELATÓRIO FINAL");

for (let i = 0; i < medias.length; i++) {
    console.log(`Aluno ${i + 1}: ${medias[i].toFixed(2)}`);
}

let mediaGeral = somaTurma / quantidadeAlunos;

console.log(`Maior média: ${maiorMedia.toFixed(2)} (Aluno ${alunoMaior})`);
console.log(`Menor média: ${menorMedia.toFixed(2)} (Aluno ${alunoMenor})`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);