// Lista com Perguntas
const listaPerguntas = [
    {
      pergunta: "Em que ano estamos?",
      opcoes: ["2021", "2022", "2032", "2023"],
      resposta: "2023"
    },
    {
      pergunta: "Em que século estamos?",
      opcoes: ["XX", "XXI", "XIX", "XV"],
      resposta: "XXI"
    },
    {
      pergunta: "Em que país nasceu Pelé?",
      opcoes: ["USA", "Canada", "Brasil", "África do Sul"],
      resposta: "Brasil"
    },
  ];

// Constantes e variáveis
  let perguntaAtual = 0;
  let pontos = 0;
  
  const textoPergunta = document.getElementById("perguntas");
  const caixaOpcoes = document.getElementById("container-opcoes");
  const resultadoTexto = document.getElementById("resultado");
  const elementoResultado = document.getElementById("container-resultado");
  const botaoJogarNovamente = document.getElementById("novamente-btn");
  
function pergunta() {
  if (perguntaAtual < listaPerguntas.length) {
    const perguntaMomento = listaPerguntas[perguntaAtual];
    textoPergunta.textContent = perguntaMomento.pergunta;
    caixaOpcoes.innerHTML = "";
    selecionaPergunta(perguntaMomento);
  } else {
    mostraResultado();
  }
}

function selecionaPergunta(perguntaMomento) {
  for (const opcao of perguntaMomento.opcoes){
    const elementoOpcoes = document.createElement("button"); //cria botao com alternativas ficou mais fácil assim eu acho :)
    elementoOpcoes.textContent = opcao;
    elementoOpcoes.addEventListener("click", () => respostaClicada(opcao));
    caixaOpcoes.appendChild(elementoOpcoes);  
  }
}

// compara a seleção com a resposta
function respostaClicada(opcaoSelecionada) {
  const perguntaMomento = listaPerguntas[perguntaAtual];
  if (opcaoSelecionada === perguntaMomento.resposta) {
    pontos++;
  }
  perguntaAtual++;
  pergunta();
}
  
  function mostraResultado() {
    textoPergunta.textContent = "Acabou!!!!";
    caixaOpcoes.innerHTML = "";
    resultadoTexto.textContent = `Voce acertou ${pontos} de ${listaPerguntas.length}.`;
    elementoResultado.style.display = "block";
  }
  
  function jogarNovamente() {
    perguntaAtual = 0;
    pontos = 0;
    elementoResultado.style.display = "none";
    pergunta();
  }
  
  // Começa
  pergunta();