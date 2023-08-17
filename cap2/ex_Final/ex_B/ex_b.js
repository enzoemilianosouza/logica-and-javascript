const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);

  const tempo = Number(frm.inTempo.value);

  const calculo = tempo / 15;
  const calculoFinal = Math.ceil(calculo) * valor;

  resp.innerText = `Valor a Pagar R$: ${calculoFinal}`;
});
