// Alexandre S. Bastos, Isnard Cavalcanti, Gabriel Gomes, Dayana Miranda, Alexandre Pedro, Wirley Almeida, Gabriela Schneider.
let usuario = () => {
  let pessoa = prompt("Pedra(1) - Papel(2) - Tesoura(3)?");
  let maquina = parseInt(Math.random() * 3 + 1);
  alert(`O computador escolheu ${maquina} 💻`);
  // poderia ser Math.round ou Math.floor ao invés de parseInt

  return [pessoa, maquina];
};

let vencedor = [];

let jogo = (opcao1, opcao2) => {
  switch (true) {
    case opcao1 == 1 && opcao2 == 2:
      vencedor[0]++;
      return `Você ganhou! Papel ganha de pedra.  😃`;
    case opcao1 == 2 && opcao2 == 3:
      vencedor[0]++;
      return `Você ganhou! Pedra ganha de tesoura. 😃`;
    case opcao1 == 3 && opcao2 == 1:
      vencedor[0]++;
      return `Você ganhou! Tesoura ganha de papel. 😃`;
    case opcao2 == 1 && opcao1 == 2:
      vencedor[1]++;
      return `O computador ganhou! Papel ganha de pedra. 🤨`;
    case opcao2 == 2 && opcao1 == 3:
      vencedor[1]++;
      return `O computador ganhou! Pedra ganha de tesoura. 🤨`;
    case opcao2 == 3 && opcao1 == 1:
      vencedor[1]++;
      return `O computador ganhou! Tesoura ganha de papel. 🤨`;
    case opcao1 == opcao2:
      return `Empatou 😐 Jogue novamente`;
    default:
      return `Ops tente novamente 💩`;
  }
};

let exec = usuario();
resultadoJogo = jogo(exec[0], exec[1]);
document.querySelector("h1").innerHTML = resultadoJogo;
