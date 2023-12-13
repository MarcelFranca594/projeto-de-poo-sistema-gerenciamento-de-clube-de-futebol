//Classe base SportsEntity
class SportsEntity {
  constructor(nome, descricao) {
    this.nome = nome;
    this.descricao = descricao;
  }
  // Método polimórfico para exibir informações sobre a entidade "displayInfo"
  displayInfo() {
    console.log(`Nome: ${this.nome}, descrição: ${this.descricao}`);
  }
}

// Classe Person para representar um indivíduo genérico
class Person extends SportsEntity {
  constructor(nome, descricao, idade) {
    super(nome, descricao);
    this.idade = idade;
  }
  displayInfo() {
    console.log(`Nome: ${this.nome} e idade: ${this.idade}`);
  }
}

//A classe "Player" deve herdar de uma classe base chamada "Person".
// Gerenciamento de Jogadores
class Player extends Person {
  constructor(nome, descricao, idade, posicao, habilidade) {
    super(nome, descricao, idade);
    this._posicao = posicao;
    this._habilidade = habilidade;
  }
  displayInfo() {
    console.log(
      `Nome: ${this.nome}, idade: ${this.idade}, posição: ${this.posicao} e habilidade: ${this.habilidade}`
    );
  }
  // Getters => "get" => Obter atributos do jogador

  get posicao() {
    return this._posicao;
  }
  set posicao(novaPosicao) {
    this._posicao = novaPosicao;
  }

  // Setters => "set" => Definir atributos do jogador

  set habilidade(novaHabilidade) {
    this._habilidade = novaHabilidade;
  }

  get habilidade() {
    return this._habilidade;
  }
}

// Gerenciamento de Times
class Team extends SportsEntity {
  constructor(nomeTime, nomeTreinador, descricao = "Time de Futebol") {
    super(nomeTime, descricao);
    this.nomeTime = nomeTime;
    this.nomeTreinador = nomeTreinador;
    this.listaJogadores = [];
  }

  displayInfo() {
    console.log(
      `Nome do time: ${this.nomeTime}, nome do treinador: ${this.nomeTreinador}`
    );
    // Verifica se a lista de jogadores está vazia
    if (this.listaJogadores.length === 0) {
      console.log("A lista de jogadores está vazia.");
    } else {
      console.log("Lista de Jogadores:");
      this.listaJogadores.forEach((jogador) => {
        console.log(jogador.nome);
      });
    }
  }

  adicionarJogadorTime(novoJogadorTime) {
    this.listaJogadores.push(novoJogadorTime);
  }
}

// Declaração das listas de jogadores e times
const listaDeJogadores = [];
const times = [];

const prompt = require("prompt-sync")();

// Função para criar um novo jogador solicitando informações ao usuário
function criarJogador() {
  const nome = prompt("Nome do jogador: ");
  const idade = parseInt(prompt("Idade do jogador: "), 10);
  const posicao = prompt("Posição do jogador: ");
  const nivelHabilidade = parseInt(
    prompt("Nível de habilidade do jogador: "),
    10
  );
  const descricao = "Jogado de Futebol";
  const novoJogador = new Player(
    nome,
    descricao,
    idade,
    posicao,
    nivelHabilidade
  );
  listaDeJogadores.push(novoJogador);
  console.log("Novo jogador criado:");
  console.log(novoJogador);
}

function criarTime() {
  const nomeTime = prompt("Nome do time: ");
  const nomeTreinador = prompt("Nome do Treinador: ");
  const novoTime = new Team(nomeTime, nomeTreinador);
  times.push(novoTime);
  console.log("Time e Treinador criado");
  console.log(novoTime);
}

function adicionarJogadorAoTime() {
  const nomeJogadorParaAdicionar = prompt(
    "Digite o nome do jogador que deseja adicionar ao time:"
  );

  // Encontrar o jogador na lista de jogadores
  const jogadorEncontrado = listaDeJogadores.find(
    (jogador) => jogador.nome === nomeJogadorParaAdicionar
  );

  if (jogadorEncontrado) {
    const nomeTimeParaAdicionar = prompt(
      "Digite o nome do time que deseja adicionar o jogador:"
    );

    // Encontrar o time na lista de times
    const timeEncontrado = times.find(
      (time) => time.nomeTime === nomeTimeParaAdicionar
    );

    if (timeEncontrado) {
      // Adicionar o jogador ao time
      timeEncontrado.adicionarJogadorTime(jogadorEncontrado);
      console.log(
        `Jogador ${nomeJogadorParaAdicionar} adicionado ao time ${nomeTimeParaAdicionar} com sucesso!`
      );
    } else {
      console.log("Time não encontrado.");
    }
  } else {
    console.log("Jogador não encontrado.");
  }
}

function visualizarInfoJogador() {
  const nomeJogador = prompt(
    "Digite o nome do jogador para visualizar suas informações:"
  );

  // Encontrar o jogador na lista de jogadores
  const jogadorEncontrado = listaDeJogadores.find(
    (jogador) => jogador.nome === nomeJogador
  );

  if (jogadorEncontrado) {
    console.log("Informações do jogador:");
    console.log(jogadorEncontrado);
  } else {
    console.log("Jogador não encontrado.");
  }
}

function visualizarInfoTime() {
  const nomeTime = prompt("Digite o nome do time que deseja visualizar:");

  // Encontrar o time na lista de times
  const timeEncontrado = times.find((time) => time.nomeTime === nomeTime);

  if (timeEncontrado) {
    timeEncontrado.displayInfo();
  } else {
    console.log("Time não encontrado.");
  }
}

// Sistema de Menu
const mostrarMenu = () => {
  console.log(" ===== Menu ===== ");
  console.log("1 - Criar um jogador");
  console.log("2 - Criar um Time");
  console.log("3 - Adicionar Jogador a um Time");
  console.log("4 - Visualizar Informações do Jogador");
  console.log("5 - Visualizar Informações do Time");
  console.log("6 - Sair");
  console.log("==================");
};

const escolherOpcao = () => {
  while (true) {
    mostrarMenu();
    const opcao = prompt("Escolher uma opção entre (1-6): ");

    switch (opcao) {
      case "1":
        console.log("Opção escolhida: Criar um jogador ");
        criarJogador();
        break;
      case "2":
        console.log("Opção escolhida: Criar um Time");
        criarTime();
        break;
      case "3":
        console.log("Opção escolhida: Adicionar Jogador a um time");
        adicionarJogadorAoTime();
        break;
      case "4":
        console.log("Opção escolhida: Visualizar Informações do Jogador");
        visualizarInfoJogador();
        break;
      case "5":
        console.log("Opção escolhida: Visualizar Informações do Time");
        visualizarInfoTime();
        break;
      case "6":
        console.log("Opção escolhida: Sair");
        return; // Encerra a função e sai do loop
      default:
        console.log("Opção inválida. Por favor, escolha uma opção de 1 a 6.");
        break;
    }
  }
};

mostrarMenu();
escolherOpcao();
