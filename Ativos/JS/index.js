let pessoas = document.querySelectorAll(".animacao-pessoas img");
let indice = 0;

function trocarPessoas() {
  // tira a classe da imagem atual
  pessoas[indice].classList.remove("active");

  // avança para a próxima imagem (volta para 0 se for a última)
  indice = (indice + 1) % pessoas.length;

  // coloca a classe na nova imagem
  pessoas[indice].classList.add("active");
}

// deixa a primeira imagem visível no início
pessoas[indice].classList.add("active");

// troca a cada 3 segundos
setInterval(trocarPessoas, 2900);
