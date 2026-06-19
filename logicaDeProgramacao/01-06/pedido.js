
// DESAFIO INTEGRADOR //

const subTotal = (preco, qtd) => {
         return preco * qtd;
};
console.log(subTotal);

const comDesconto = (valor, taxa = 0, desconto) =>{
     desconto = valor * taxa;
     return [ valor - desconto, desconto];
};
console.log(comDesconto(40, 0.10));




function freteGratis(total){
    if(total >= 150){
        console.log(`Frete Grátisss`);
        return true;
    } else{
        console.log(`Frete NO Grátisss`);
        return false;
    };
};
console.log(freteGratis(149));




