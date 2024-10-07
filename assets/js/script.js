// Menu Mobile
function menuShow() {
  let menuMobile = document.querySelector(".menu-mobile");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
  } else {
    menuMobile.classList.add("open");
  }
}

// Galeria
const galeria = document.querySelector(".galeria");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const imagensVisiveis = 4;
const tamanhoImg = 300 + 32;

let currentIndex = 0;
const maxIndex =
  document.querySelectorAll(".galeria-img").length - imagensVisiveis;

function atualizaPosicaoGaleria() {
  const posicao = -currentIndex * tamanhoImg;
  galeria.style.transform = `translate(${posicao}px, -50%)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    atualizaPosicaoGaleria();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    atualizaPosicaoGaleria();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && currentIndex < maxIndex) {
    currentIndex++;
    atualizaPosicaoGaleria();
  } else if (e.key === "ArrowLeft" && currentIndex > 0) {
    currentIndex--;
    atualizaPosicaoGaleria();
  }
});
