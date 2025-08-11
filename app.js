// ===============================================
// DESAFIO: AMIGO SECRETO - ORACLE ONE
// OBJETIVO: Criar uma lista de amigos, permitir adicionar novos nomes e realizar um sorteio.
// AUTOR: João Henrique A. Fernandes
// ===============================================

// Lista onde serão armazenados os nomes dos amigos
let amigos = [];

// Função para exibir texto em qualquer elemento HTML selecionado pelo "tag"
// Exemplo: exibirTextoNaTela("h1", "Título da Página");
function exibirTextoNaTela(tag, texto) {
  const campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

// Mensagem inicial no título da página
exibirTextoNaTela("h1", "Amigo Secreto do JH");

// Função para adicionar um amigo na lista
function adicionarAmigo() {
  const inputNome = document.getElementById("amigo"); // Campo de texto do HTML
  const nomeDigitado = inputNome.value.trim(); // Remove espaços extras

  // Validação: verificar se foi digitado algo
  if (!nomeDigitado) {
    alert("Digite um nome válido!");
    return; // Impede que o código continue
  }

  // Adiciona o novo nome ao array de amigos
  amigos.push(nomeDigitado);

  // Atualiza a lista exibida na tela
  atualizarLista();

  // Limpa o campo de texto
  inputNome.value = "";

  // Salva a lista no localStorage
  salvarListaNoLocalStorage();
}

// Função para sortear um amigo da lista
function sortearAmigo() {
  // Impede o sorteio se não houver amigos cadastrados
  if (amigos.length === 0) {
    alert("Adicione amigos antes de sortear!");
    return;
  }

  // Gera um número aleatório entre 0 e o tamanho da lista
  const indiceSorteado = Math.floor(Math.random() * amigos.length);

  // Pega o nome correspondente ao índice sorteado
  const amigoSorteado = amigos[indiceSorteado];

  // Exibe o resultado na lista de "resultados" no HTML
  const resultado = document.getElementById("resultado");
  const itemResultado = document.createElement("li");
  itemResultado.innerText = `O amigo escolhido é: ${amigoSorteado}`;
  resultado.appendChild(itemResultado);

  // Remove o amigo sorteado da lista (para evitar repetição)
  amigos = amigos.filter(amigo => amigo !== amigoSorteado);

  // Atualiza a lista exibida na tela
  atualizarLista();

  // Atualiza o localStorage
  salvarListaNoLocalStorage();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpa o conteúdo atual
  listaAmigos.innerHTML = "";

  // Percorre a lista e cria um <li> para cada amigo
  amigos.forEach(nome => {
    const item = document.createElement("li");
    item.innerText = nome;
    listaAmigos.appendChild(item);
  });
}

// Função para salvar a lista no localStorage
function salvarListaNoLocalStorage() {
  localStorage.setItem("lista-de-amigos", JSON.stringify(amigos));
}

// Função para carregar a lista do localStorage ao abrir a página
function carregarListaDoLocalStorage() {
  const listaSalva = localStorage.getItem("lista-de-amigos");
  if (listaSalva) {
    amigos = JSON.parse(listaSalva);
    atualizarLista();
  }
}

// Carrega a lista assim que o script é executado
carregarListaDoLocalStorage();
