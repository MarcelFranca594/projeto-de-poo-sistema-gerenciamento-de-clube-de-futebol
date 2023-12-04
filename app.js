// Gerenciamento de Jogadores
class Player {
  constructor(nome, idade, posicao, habilidade) {
    this.nome = nome;
    this.idade = idade;
    this.posicao = posicao;
    this.habilidade = habilidade;
  }
  // Métodos
}

// Gerenciamento de Times
class Team {
  constructor(nomeTime, nomeTreinador, listaJogadores) {
    this.nomeTime = nomeTime;
    this.nomeTreinador = nomeTreinador;
    this.listaJogadores = listaJogadores;
  }
}

const mostrarMenu = () => {
  console.log(" ===== Menu ===== ");
  console.log("1 - Criar um jogador");
  console.log("2-  Criar um time");
  console.log("3 - Adicionar Jogador a um Time");
  console.log("4 - Visualizar Informações do Jogador");
  console.log("5 - Visualizar Informações do Time");
  console.log("6 - Sair");
  console.log("==================");
};

// Sistema de Menu
const escolherOpcao = () => {
  const opcao = prompt("Escolher uma opção entre (1-6):");
  switch (opcao) {
    case "1":
      console.log("Opção escolhida: Criar um jogador ");
      break;
    case "2":
      console.log("Opção escolhida: Criar um Time");
      break;
    case "3":
      console.log("Opção escolhida: Adicionar Jogador a um time");
      break;
    case "4":
      console.log("Opção escolhida: Visualizar Informações do Jogador");
      break;
    case "5":
      console.log("Opção escolhida: Visualizar Informações do Time");
      break;
    case "6":
      console.log("Opção escolhida: Sair");
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção de 1 a 6.");
      break;
  }
};

mostrarMenu();
escolherOpcao();
