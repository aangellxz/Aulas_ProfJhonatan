const numeroSecreto = 42;
let tentativas = 0;
let acertou 
let chute = null

while (!acertou) {
     chute = Number(prompt("Tente adivinhar o número (entre 1 e 100):"));

    tentativas++;

    if (chute === numeroSecreto) {
        acertou = true;
    } else if (chute > numeroSecreto) {
        console.log("Muito alto! Tente de novo.");
    } else {
        console.log("Muito baixo! Tente de novo.");
    }
}

console.log(`Você acertou em ${tentativas} tentativas!`);