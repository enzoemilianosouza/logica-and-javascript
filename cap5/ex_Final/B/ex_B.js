const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let numeroChinchilas = Number(form.inQntd.value);
  const numeroAnos = Number(form.inAnos.value);
  const taxaRepro = 3;

  if (numeroAnos < 2) {
    resp.innerText = "Digite um número de anos maior ou igual a 2.";
    return; // Retorna para evitar a execução do restante do código
  }

  let resultado = ""; // Variável para armazenar a saída formatada

  for (let i = 1; i <= numeroAnos; i++) {
    resultado += `${i}º ano: ${numeroChinchilas} chinchilas\n`; // Adiciona o resultado formatado
    numeroChinchilas *= taxaRepro;
  }

  resp.innerText = resultado;
});
