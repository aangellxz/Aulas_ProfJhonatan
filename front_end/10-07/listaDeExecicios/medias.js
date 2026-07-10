function media(soma = 0, notas = []) {
    for (let i = 1; i <= 4; i++) {
        let nota = Number(prompt("Digite a " + i + "ª nota:"));
        soma += nota;
        notas.push(nota);
    };

    let media = soma / notas.length ;

      if (media >= 7) {
        alert("Média: " + media + "\nAprovado. CONGRATULACIONS");
    } else if (media >= 5) {
        alert("Média: " + media + "\nRecuperação. QUASE");
    } else {
        alert("Média: " + media + "\nReprovado. RUIIIIIM");
    }

};
console.log(media());
