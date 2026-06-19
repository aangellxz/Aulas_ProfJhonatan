function saudacao(nome){
    nome = prompt("Digite o seu nome");
    alert (`Olá, ${nome}`);
};

function calcularArea(l, a){
     a = Number(prompt("Digite a ALTURA:"));
     l = Number(prompt("Digite a LARGURA:"));

    let calculo = l * a;
    alert (`O calculo da área é: ${calculo.toFixed(2)}`);
};



