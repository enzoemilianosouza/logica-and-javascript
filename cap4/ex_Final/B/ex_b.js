const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valuePermitido = parseFloat(form.inPermitido.value);
  const valueCondutor = parseFloat(form.inCondutor.value);

  const limiteMultaLeve = valuePermitido * 1.2;

  if (valueCondutor <= valuePermitido) {
    resp.innerText = "Sem multa!";
  } else if (valueCondutor <= limiteMultaLeve) {
    resp.innerText = "Multa leve!";
  } else {
    resp.innerText = "Multa grave!";
  }
});
