let nome = prompt("Digite o seu nome: ");
let idade = Number(prompt("Digite a sua idade: "));
let sobrenome = prompt("Digite o seu sobrenome: ");
let cidade = prompt("Digite a sua cidade: ");

function infoPessoais(){
    return (`Olá, ${nome} ! Você tem ${idade} anos. \n Seu sobrenome é ${sobrenome} Reside na cidade de ${cidade}`);
}


console.log(infoPessoais(nome, idade, sobrenome, cidade));

