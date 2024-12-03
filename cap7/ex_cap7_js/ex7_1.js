const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const anuncio = form.inAnuncio.value;

  let numPalavras = 0;

  const tam = anuncio.length;

  for (let i = 0; i < tam; i++) {
    if (anuncio[i] === " ") {
      numPalavras++;
    }
  }

  console.log(anuncio);
  alert("Anuncio:" + anuncio + "\nNúmero de palavras: " + (numPalavras + 1));
});
