const form = document.querySelector("form");
const resTempo = document.querySelector("h3");
const resTroco = document.querySelector("h2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorDeposito = parseFloat(form.inValor.value);
  const valorMin = 1.0;
  const valorMed = 1.75;
  const valorMax = 3.0;
  const tempoMin = 30;
  const tempoMed = 60;
  const tempoMax = 120;

  let tempo;

  if (valorDeposito < valorMin) {
    resTempo.innerText = `Valor insuficiente!`;
  } else if (valorDeposito >= valorMin && valorDeposito < valorMed) {
    tempo = tempoMin;
  } else if (valorDeposito >= valorMed && valorDeposito < valorMax) {
    tempo = tempoMed;
  } else {
    tempo = tempoMax;
  }

  const troco =
    valorDeposito -
    (tempo === tempoMax ? valorMax : tempo === tempoMed ? valorMed : valorMin);
  resTempo.innerText = `Tempo: ${tempo} minutos`;
  resTroco.innerText = `Troco: R$ ${troco.toFixed(2)}`;
});
