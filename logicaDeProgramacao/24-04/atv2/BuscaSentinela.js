let soma = 0;
let quantidade = 0;
let entradaValida = true;

while (true) {
    let numero = Number(prompt("Digite um número (0 para encerrar):"));

    // Se número negativo da erro e encerra tudo
    if (numero < 0) {
        console.log("Entrada inválida! Números negativos não são permitidos.");
        entradaValida = false;
        break; // sai por erro
    }

    
    if (numero === 0) {
        break; // sai normalmente
    }

    soma += numero;
    quantidade++;
}


if (entradaValida) {
    console.log(`Encerrado. Soma: ${soma} | Quantidade: ${quantidade}`);
} else {
    console.log("Programa encerrado sem resultado.");
}