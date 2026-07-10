// Declaração de variaveis
let tarefas = '';
let totalTafefas = 0;
let executando = true;
const SEPARADOR = '\n'

// Referência ao HTML
const campoTarefa = document.getElementById("campoTarefa");
const saida = document.getElementById("saida");

// Função de atualização do HTML
function mostrar (mensagem){
    saida.textContent = mensagem;
};

// 1 - Adicionar Tarefas 
document.getElementById('btn-adicionar').onclick = adicionarTarefa;

function adicionarTarefa(){
    if(executando == false){
        mostrar("O programa foi encerrado. Recarregue a página");
        return;
    };
    let novaTarefa = campoTarefa.value;

    // Validação de tarefa VAZIA
    if(novaTarefa == null || novaTarefa == ''){
        mostrar("Tarefa inválida! Nada foi adicionado");
        return;
    };
    totalTafefas = totalTafefas + 1;
    tarefas = tarefas + totalTafefas + '-' + novaTarefa + SEPARADOR;

    campoTarefa.value = '';
    mostrar('Tarefa adicionada com sucesso!\n\n' + tarefas);
};
// 2 - Listar
document.getElementById('btnListar').onclick = listarTarefas;

function listarTarefas(){
    let mensagem = 
     totalTafefas > 0 
     ? "Suas Tarefas: \n" + tarefas
     : "Nenhuma Tarefa Cadastrada."
     mostrar(mensagem);
};

// 3 - Contar tarefas
document.getElementById('btnContar').onclick = contarTarefas;

    function contarTarefas(){
        let barra = '';
        for (let i = 0; i <= totalTafefas; i++){
            barra = barra;
        };
        mostrar("Você tem "+ totalTafefas + 'tarefa(s) ' + barra);
    };

// 4 - Sair 
document.getElementById('btnSair').onclick = sair;

function sair(){
    executando = false;

    mostrar (
        'Encerrando o Programa. Até mais!\n' +
        'Programa Finalizado.\n' +
        'Total de Tarefas Criadas: \n' + totalTafefas
    );
    console.log('Programa Finalizado!');
    console.log('Total de Tarefas Criadas: \n'+ totalTafefas);
};