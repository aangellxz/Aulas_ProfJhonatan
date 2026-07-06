function calculadora(operador, ...numeros) {
    let resultado = 0;

    if (operador == "+") {
        resultado = numeros.reduce((acc, n) => acc += n);

    } else if (operador == "*") {
        resultado = numeros.reduce((acc, n) => acc *= n);

    } else if (operador == "/") {
        resultado = numeros.reduce((acc, n) => acc /=  n);

    } else if (operador == "-") {
        resultado = numeros.reduce((acc, n) => acc -= n);
    }

    return resultado;
}

// console.log(calculadora("+", 10, 20, 30)); // 60
// console.log(calculadora("*", 2, 3, 4));    // 24
// console.log(calculadora("/", 100, 2, 5));  // 10
// console.log(calculadora("-", 20, 5, 3));   // 12

let calculadoras = [1,2,3,4,5];
const calculadorax3 = calculadoras.map((n)=> n * 3);
console.log(calculadorax3);

let numeros = [2,29,90,30];

let filtrados = numeros.filter((n)=> n > 20);

// console.log(filtrados);
 
function recebeNumero (... numero){
    let pares = numero.filter((n)=> n % 2 === 0 );
    let somatorio = filtrados.reduce((acc, n)=> acc += n);
    return [pares, somatorio];
};
console.log(
   ` recebeNumero(1,2,3,4,5,6,7,8,9,10)[0]`,
    `\nsSomat`
);

