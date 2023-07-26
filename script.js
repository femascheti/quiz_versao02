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
  
// 
  function perguntar() {
    if (perguntaAtual < listaPerguntas.length) {
      const perguntaMomento = listaPerguntas[perguntaAtual];
      textoPergunta.textContent = perguntaMomento.pergunta;
      caixaOpcoes.innerHTML = "";
  
      perguntaMomento.opcoes.forEach((option) => {
        const elementoOpcoes = document.createElement("button"); //cria botao com alternativas ficou mais fácil assim eu acho :)
        elementoOpcoes.textContent = option;
        elementoOpcoes.addEventListener("click", () => corrigirResposta(option));
        caixaOpcoes.appendChild(elementoOpcoes);
      });
    } else {
      mostrarResultado();
    }
  }

// compara a seleção com a resposta
  function corrigirResposta(selectedOption) {
    const perguntaMomento = listaPerguntas[perguntaAtual];
    if (selectedOption === perguntaMomento.resposta) {
      pontos++;
    }
  
    perguntaAtual++;
    perguntar();
  }
  
  function mostrarResultado() {
    textoPergunta.textContent = "Acabou!!!!";
    caixaOpcoes.innerHTML = "";
    resultadoTexto.textContent = `Voce acertou ${pontos} de ${listaPerguntas.length}.`;
    elementoResultado.style.display = "block";
  }
  
  function jogarNovamente() {
    perguntaAtual = 0;
    pontos = 0;
    elementoResultado.style.display = "none";
    perguntar();
  }
  
  // Começa
  perguntar();
  