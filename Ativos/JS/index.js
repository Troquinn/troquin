const imagens = [
    "../IMAGENS/imagens-home/p11.svg",
    "../IMAGENS/imagens-home/p12.svg",
    "../IMAGENS/imagens-home/p14.svg",
    "../IMAGENS/imagens-home/p15.svg"
];

const imgElemento = document.getElementById("pessoas");
let indice = 0;

function trocarImagemSuave() {
    // Faz a imagem sumir
    imgElemento.style.opacity = 0;

    // Depois do fade, troca a imagem e reaparece
    setTimeout(() => {
        indice = (indice + 1) % imagens.length;
        imgElemento.src = imagens[indice];
        imgElemento.style.opacity = 1;
    }, 2000); // 2000ms = tempo do fade
}

// Troca a cada 4 segundos
setInterval(trocarImagemSuave, 4000);

