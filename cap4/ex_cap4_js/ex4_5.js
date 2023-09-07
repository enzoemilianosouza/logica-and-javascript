const form = document.querySelector("form");
const resposta = document.querySelector("h2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorNumero = Number(form.inNumero.value);
  const calculoRaiz = Math.sqrt(valorNumero);

  let resultado;

  if (Number.isInteger(calculoRaiz)) {
    resultado = calculoRaiz;
  } else {
    resultado = `Não há raiz exata para ${valorNumero}`;
  }

  resposta.innerText = `Raiz: ${resultado}`;
});
