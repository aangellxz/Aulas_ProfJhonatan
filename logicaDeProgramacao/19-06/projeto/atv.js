// Projeto: Loja de Games Pixel Play
// Atividade de objetos em JavaScript puro.

function criarJogo(titulo, preco, genero, unidades, lancado, plataformas) {
    return {
        titulo: titulo,
        preco: preco,
        genero: genero,
        unidades: unidades,
        lancado: lancado,
        plataformas: plataformas,

        statusEstoque() {
            if (this.unidades === 0) {
                return "Esgotado";
            }

            if (this.unidades <= 3) {
                return "Últimas unidades";
            }

            return "Disponível";
        },

        cabeNoOrcamento(valor) {
            return this.preco <= valor;
        }
    };
}

// ETAPA 1 e 2: objeto, propriedades, acesso e metodos com this.
const jogo = criarJogo(
    "Stardew Valley",
    79.90,
    "RPG",
    5,
    true,
    ["PC", "Switch", "Xbox"]
);

console.log("ETAPA 1 - Acessando propriedades");
console.log(jogo.titulo);
console.log(jogo["genero"]);
console.log(jogo.plataformas[0]);

console.log("ETAPA 2 - Métodos do objeto");
console.log(jogo.statusEstoque());
console.log(jogo.cabeNoOrcamento(200));
console.log(jogo.cabeNoOrcamento(50));

// ETAPA 3: array de objetos e manipulacao nas pontas.
const jogo1 = criarJogo("Stardew Valley", 79.90, "RPG", 5, true, ["PC", "Switch", "Xbox"]);
const jogo2 = criarJogo("Animal Crossing", 249.90, "Simulação", 2, true, ["Switch"]);
const jogo3 = criarJogo("The Sims 4", 129.90, "Simulação", 0, true, ["PC", "PS5", "Xbox"]);

const catalogo = [jogo1, jogo2, jogo3];

const jogoNovo = criarJogo("Minecraft", 119.90, "Sandbox", 8, true, ["PC", "PS5", "Xbox", "Switch"]);
catalogo.push(jogoNovo);

catalogo.shift();

const destaque = criarJogo("Kirby and the Forgotten Land", 299.90, "RPG", 3, true, ["Switch"]);
catalogo.unshift(destaque);

console.log("ETAPA 3 - Quantidade de jogos:", catalogo.length);

// ETAPA 4: listagem com forEach.
function listarCatalogo(jogos) {
    jogos.forEach(function (jogoAtual, indice) {
        console.log(`${indice + 1} - ${jogoAtual.titulo} (${jogoAtual.statusEstoque()})`);
    });
}

console.log("ETAPA 4 - Catálogo numerado");
listarCatalogo(catalogo);

// ETAPA 5: relatorios com filter, map e reduce.
const jogosRPG = catalogo
    .filter(function (jogoAtual) {
        return jogoAtual.genero === "RPG";
    })
    .map(function (jogoAtual) {
        return jogoAtual.titulo;
    });

const totalEstoque = catalogo.reduce(function (total, jogoAtual) {
    return total + jogoAtual.unidades;
}, 0);

const jogoMaisCaro = catalogo.reduce(function (maisCaro, jogoAtual) {
    if (jogoAtual.preco > maisCaro.preco) {
        return jogoAtual;
    }

    return maisCaro;
});

console.log("ETAPA 5 - Jogos RPG:", jogosRPG);
console.log("ETAPA 5 - Total de unidades:", totalEstoque);
console.log("ETAPA 5 - Jogo mais caro:", jogoMaisCaro.titulo);

// ETAPA 6: contador por genero com chave dinamica e for..in.
function contarJogosPorGenero(jogos) {
    const contagemGenero = {};

    jogos.forEach(function (jogoAtual) {
        if (!contagemGenero[jogoAtual.genero]) {
            contagemGenero[jogoAtual.genero] = 0;
        }

        contagemGenero[jogoAtual.genero]++;
    });

    return contagemGenero;
}

const contagemGenero = contarJogosPorGenero(catalogo);

console.log("ETAPA 6 - Jogos por gênero");
for (let genero in contagemGenero) {
    console.log(`${genero}: ${contagemGenero[genero]}`);
}

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function criarClasseStatus(status) {
    if (status === "Esgotado") {
        return "status-esgotado";
    }

    if (status === "Últimas unidades") {
        return "status-ultimas";
    }

    return "status-disponivel";
}

function mostrarCatalogoNaTela(jogos) {
    if (typeof document === "undefined") {
        return;
    }

    const catalogoDiv = document.getElementById("catalogo");

    if (!catalogoDiv) {
        return;
    }

    catalogoDiv.innerHTML = "";

    jogos.forEach(function (jogoAtual) {
        const plataformas = jogoAtual.plataformas
            .map(function (plataforma) {
                return `<span>${plataforma}</span>`;
            })
            .join("");

        catalogoDiv.innerHTML += `
            <article class="card">
                <div class="card-cabecalho">
                    <h3>${jogoAtual.titulo}</h3>
                    <span>${jogoAtual.genero}</span>
                </div>
                <div class="card-corpo">
                    <p><strong>Preço:</strong> ${formatarPreco(jogoAtual.preco)}</p>
                    <p><strong>Estoque:</strong> ${jogoAtual.unidades} unidades</p>
                    <p><strong>Lançado:</strong> ${jogoAtual.lancado ? "Sim" : "Não"}</p>
                    <div class="status ${criarClasseStatus(jogoAtual.statusEstoque())}">${jogoAtual.statusEstoque()}</div>
                    <p><strong>Plataformas:</strong></p>
                    <div class="plataformas">${plataformas}</div>
                </div>
            </article>
        `;
    });
}

function mostrarRelatoriosNaTela() {
    if (typeof document === "undefined") {
        return;
    }

    const totalJogosElemento = document.getElementById("totalJogos");
    const totalEstoqueElemento = document.getElementById("totalEstoque");
    const jogoMaisCaroElemento = document.getElementById("jogoMaisCaro");
    const totalGenerosElemento = document.getElementById("totalGeneros");
    const listaRpg = document.getElementById("listaRpg");
    const listaGenero = document.getElementById("contagemGenero");

    if (!totalJogosElemento || !totalEstoqueElemento || !jogoMaisCaroElemento || !totalGenerosElemento || !listaRpg || !listaGenero) {
        return;
    }

    totalJogosElemento.textContent = catalogo.length;
    totalEstoqueElemento.textContent = totalEstoque;
    jogoMaisCaroElemento.textContent = jogoMaisCaro.titulo;
    totalGenerosElemento.textContent = Object.keys(contagemGenero).length;
    listaRpg.innerHTML = "";
    listaGenero.innerHTML = "";

    jogosRPG.forEach(function (titulo) {
        listaRpg.innerHTML += `<li>${titulo}</li>`;
    });

    for (let genero in contagemGenero) {
        listaGenero.innerHTML += `<li>${genero}: ${contagemGenero[genero]}</li>`;
    }
}

function configurarTrocaDeTema() {
    if (typeof document === "undefined") {
        return;
    }

    const botaoTema = document.getElementById("botaoTema");

    if (!botaoTema) {
        return;
    }

    botaoTema.addEventListener("click", function () {
        const estaNoModoCute = document.body.classList.contains("modo-cute");

        if (estaNoModoCute) {
            document.body.classList.remove("modo-cute");
            document.body.classList.add("modo-normal");
            botaoTema.textContent = "Modo cute";
            return;
        }

        document.body.classList.remove("modo-normal");
        document.body.classList.add("modo-cute");
        botaoTema.textContent = "Modo normal";
    });
}

mostrarCatalogoNaTela(catalogo);
mostrarRelatoriosNaTela();
configurarTrocaDeTema();


