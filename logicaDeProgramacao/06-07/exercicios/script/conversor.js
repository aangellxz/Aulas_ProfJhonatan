export function metrosParaCentimetros(... metros){
    let converter = metros * 100;
    return converter;
};
console.log(metrosParaCentimetros());



export function kmParaMetros(... km){
    let converter = km * 1000;
    return converter;
};
console.log(kmParaMetros());



export default function celsiusParaFahrenheit(... c){
    let f =  (c * 1,8) + 32;
    return f;
};
console.log(celsiusParaFahrenheit(30));



function horasParaMinutos(){};