//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeDoAmigo = document.getElementById("amigo");

function adicionarAmigo() {
  if (nomeDoAmigo.value.length < 1) {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nomeDoAmigo.value);
  }

  nomeDoAmigo.value = "";
}
