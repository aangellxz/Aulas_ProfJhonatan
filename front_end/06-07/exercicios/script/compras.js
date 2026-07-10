export function calcularSubtotal(preco, quantidade){
    let precoTotal = preco * quantidade;
    return precoTotal.toFixed(2)
};
console.log(calcularSubtotal(10, 2));


export function aplicarDesconto(preco, desconto){
    let precoComDesconto = preco * (desconto / 100);
    return precoComDesconto.toFixed(2);
};
console.log(aplicarDesconto(300, 10));



export function calcularFrete(valor){
    if (valor >= 200){
        return 'Frete GRÁTIS!'
    } else {
        return 'Frete de R$20,00.'
    };
};
console.log(calcularFrete(101));


export default function calcularTotal(valor, frete){
    if ( frete === false){
        return `Sua compra ficou de R$${valor}, SEM frete!`
    } else {
      let total = valor + 20;
      return `Sua compra ficou de R$${total}, com R$20,00 de frete.`
    }
};
console.log(calcularTotal(200, false));
