//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeDoAmigo = document.getElementById("amigo");
let listaDeAmigos = document.getElementById("listaAmigos");
let contenedorDeResultado = document.getElementById("resultado");

function adicionarAmigo() {
  if (nomeDoAmigo.value.length < 1) {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nomeDoAmigo.value);
  }

  nomeDoAmigo.value = "";
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  listaDeAmigos.innerHTML = "";
  amigos.forEach((nome) => {
    listaDeAmigos.innerHTML += `<li>${nome}</li>`;
  });
}

function sortearAmigo() {
  if (amigos.length < 1) {
    alert(
      "Não existem nomes disponíveis. Inserte pelo menos dois nomes para sortear."
    );
  } else {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];
    contenedorDeResultado.innerHTML += `<li>O amigo secreto sorteado é: ${nomeSorteado}</li>`;
    lerTextoDoResultado(`O amigo secreto sorteado é: ${nomeSorteado}`);
  }
}

function verificarTecla(event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
}

function lerTextoDoResultado(texto) {
  if ("speechSynthesis" in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  }
}
