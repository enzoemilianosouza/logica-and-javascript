const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const medicamento = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);

  const total = preco * 2;
  const promocaoTotal = Math.floor(total).toFixed(2);

  resp1.innerText = `Promoção de: ${medicamento}`;

  resp2.innerText = `Leve 2 por apenas R$: ${promocaoTotal}`;
});
