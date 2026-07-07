export default function contarCaracteres(texto){
    texto = texto.toString();
    return texto.length;
};
console.log(contarCaracteres("urso"));



export function deixarMaiusculo(palavra){
    palavra = palavra.toString();
    return palavra.toUpperCase();
};
console.log(deixarMaiusculo("urso"));


export function contdeixarMinusculo(palavra){
    palavra = palavra.toString();
    return palavra.toLowerCase();
};
console.log(contdeixarMinusculo("CABALO"));


export function inverterTexto(...texto){
    texto = texto.toString();
    return texto.split('').reverse().join('');
};
console.log(inverterTexto("palavra"));
