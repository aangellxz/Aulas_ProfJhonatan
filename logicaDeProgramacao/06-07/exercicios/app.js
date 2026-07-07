// ATV 1
import somar, {subtracao, divisao, multiplicacao} from './script/calculadora.js';

// console.log(somar(10, 5));
// console.log(subtracao(10, 5));
// console.log(divisao(10, 5));
// console.log(multiplicacao(10, 5));

// ATV 2 
import celsiusParaFahrenheit, {metrosParaCentimetros, kmParaMetros, horasParaMinutos} from './script/conversor.js';

// console.log(metrosParaCentimetros(2.5));
// console.log(kmParaMetros(2.5));
// console.log(celsiusParaFahrenheit(30));
// console.log(horasParaMinutos(1));

// ATV 3
import contarCaracteres, {deixarMaiusculo, contdeixarMinusculo, inverterTexto} from './script/texto.js';

// console.log(contarCaracteres("Malaquita"));
// console.log(deixarMaiusculo("pimenta"));
// console.log(contdeixarMinusculo("PARAGUAIO"));
// console.log(inverterTexto("paralelepipedo"));

// ATV 4
import calcularTotal, {calcularSubtotal, aplicarDesconto, calcularFrete} from './script/compras.js';

console.log(calcularSubtotal(30, 2));
console.log(aplicarDesconto(500, 20));
console.log(calcularFrete(20));
console.log(calcularTotal(2000, true));

