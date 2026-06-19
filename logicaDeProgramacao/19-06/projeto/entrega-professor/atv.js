// Projeto: Loja de Games Pixel Play
// Atividade prática - Objetos em JavaScript

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

// ETAPA 1 e 2: objeto, propriedades, acesso e métodos com this.
const jogo = criarJogo(
    "Elden Ring",
    199.90,
    "RPG",
    5,
    true,
    ["PC", "PS5", "Xbox"]
);

console.log("ETAPA 1 - Acessando propriedades");
console.log(jogo.titulo);
console.log(jogo["genero"]);
console.log(jogo.plataformas[0]);

console.log("ETAPA 2 - Métodos do objeto");
console.log(jogo.statusEstoque());
console.log(jogo.cabeNoOrcamento(200));
console.log(jogo.cabeNoOrcamento(100));

// ETAPA 3: array de objetos e manipulação nas pontas.
const jogo1 = criarJogo("Elden Ring", 199.90, "RPG", 5, true, ["PC", "PS5", "Xbox"]);
const jogo2 = criarJogo("Hades", 89.90, "Roguelike", 2, true, ["PC", "Switch", "PS5"]);
const jogo3 = criarJogo("Forza Horizon 5", 249.90, "Corrida", 0, true, ["PC", "Xbox"]);

const catalogo = [jogo1, jogo2, jogo3];

const jogoNovo = criarJogo("Minecraft", 119.90, "Sandbox", 8, true, ["PC", "PS5", "Xbox", "Switch"]);
catalogo.push(jogoNovo);

catalogo.shift();

const destaque = criarJogo("Dark Souls III", 229.90, "RPG", 3, true, ["PC", "PS5", "Xbox"]);
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

// ETAPA 5: relatórios com filter, map e reduce.
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

// ETAPA 6: contador por gênero com chave dinâmica e for..in.
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
