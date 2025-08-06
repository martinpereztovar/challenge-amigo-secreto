//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeDoAmigo = document.getElementById("amigo");
let listaDeAmigos = document.getElementById("listaAmigos");

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
    let contenedorDeResultado = document.getElementById("resultado");
    contenedorDeResultado.innerHTML += `<li>O amigo secreto sorteado é: ${nomeSorteado}</li>`;
  }
}
