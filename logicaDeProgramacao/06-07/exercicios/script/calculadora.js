export default function somar(...numeros) {
       let  soma =  numeros.reduce((acc, n) => acc += n);
       return soma;
};

export function subtracao(...numeros) {
    let diminui =  numeros.reduce((acc, n) => acc -= n);
    return diminui;
};

export function divisao(...numeros) {
       let dividir =  numeros.reduce((acc, n) => acc /= n);
       return dividir;
};
export function multiplicacao(...numeros) {
       let multiplica =  numeros.reduce((acc, n) => acc *= n);
       return multiplica;
};

// console.log(somar( 10, 20, 30)); // 60
// console.log(subtracao(30, 20)); // 10
// console.log(divisao(30, 20)); // 1.5
// console.log(multiplicacao(30, 2)); // 60
