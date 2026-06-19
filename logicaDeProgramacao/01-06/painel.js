function pontosBase(tarefa){
       return tarefa * 10;
};
console.log(pontosBase(15));


function comBonus (pontos, bonus = 50){
    return pontos + bonus;
};
// console.log(pontosBase(15));
// console.log(pontosBase(20), 80);

const atingiuMeta = (pontos) => {
    if(pontos >= 200){
        return true;
    } else{
        return false;
    };
};

function totalEquipe(... soma){
    let resultado = 0;
    for (let somar of soma){
        resultado += somar;
    };
    return resultado;
};

let clb =  [15, 20, 10];

function painelCompleto (tarefa, pontos, bonus){
    const pontosBase = pontosBase(tarefa);
    const comBonus = comBonus(pontos, bonus);
    const atingiuMeta = atingiuMeta(pontos);
    const pontosFinais = pontosBase + comBonus;
    if (atingiuMeta){    
        return `Meta atingida, o total da equipe é de ${pontosFinais} `  ;  
    } else {
         return `Meta atingida, o total da equipe é de ${pontosFinais} ` ;
    }
    return tarefa * 10;
};


//aula de hj

const nomes = [

];
const primeirosNomes = nomes.map((nome) => {
    return nome.split(" ")[1];
});




