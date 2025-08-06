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
