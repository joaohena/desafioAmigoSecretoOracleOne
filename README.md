## Desafio: Sorteio de Amigo Secreto

Este projeto em JavaScript é uma aplicação simples para sortear um nome de uma lista de amigos. Ele permite adicionar nomes e sortear um deles de forma aleatória.

-----

### 📝 Descrição do Projeto

Este projeto foi desenvolvido como parte de um desafio de programação para criar um sorteador de amigos. As funcionalidades principais incluem:

  * **Adicionar amigos:** Um campo de entrada permite adicionar nomes à lista.
  * **Sortear um amigo:** Um botão realiza o sorteio de um nome de forma aleatória, exibindo o resultado na tela.
  * **Persistência de dados:** A lista de amigos é salva no **localStorage** do navegador, o que significa que os dados não são perdidos ao recarregar a página.

-----

### 🚀 Tecnologias Utilizadas

  * **HTML:** Estrutura da página.
  * **CSS:** Estilização da interface (não presente no código, mas pode ser adicionado).
  * **JavaScript:** Lógica principal do projeto, responsável por manipular a lista, sortear e gerenciar o `localStorage`.

-----

### 🛠️ Funcionalidades

  * `adicionarAmigo()`: Adiciona um novo nome à lista e atualiza a exibição na tela.
  * `sortearAmigo()`: Seleciona aleatoriamente um nome da lista, exibe o resultado e o remove da lista para evitar repetições.
  * `salvarListaNoLocalStorage()`: Salva a lista de amigos no `localStorage`.
  * `carregarListaDoLocalStorage()`: Carrega a lista salva no `localStorage` sempre que a página é aberta.

-----

### 🖥️ Como Usar

1.  Clone este repositório.
2.  Abra o arquivo `index.html` em seu navegador.
3.  Digite os nomes dos amigos no campo de texto e clique em "Adicionar".
4.  Quando todos os nomes estiverem na lista, clique em "Sortear Amigo" para ver o resultado.

-----

### 👥 Autor

  * **Seu Nome ou Usuário do GitHub** - [Seu Perfil](https://github.com/joaohena)