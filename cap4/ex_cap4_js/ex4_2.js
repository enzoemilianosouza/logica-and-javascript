const form = document.querySelector("form");
const resposta = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;
  const masculino = form.inMasculino.checked;
  const altura = Number(form.inAltura.value);

  let peso; //declaro a var peso
  if (masculino) {
    //se masculino - true
    peso = 22 * Math.pow(altura, 2); //retorno a base elevada ao expoente
  } else {
    peso = 21 * Math.pow(altura, 2);
  }

  resposta.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kgm`;
});

form.addEventListener("reset", (e) => {
  resposta.innerText = "";
});
