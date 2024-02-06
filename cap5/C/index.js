const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numeroEntrada = Number(form.inNum.value);
  let divisores = [];
  let somaDivisores = 0;

  for (i = 1; i < numeroEntrada; i++) {
    if (numeroEntrada % i === 0) {
      divisores.push(i);
      somaDivisores += i;
    }
  }

  if (somaDivisores === numeroEntrada) {
    resp.innerText = `Divisores do ${numeroEntrada}: ${divisores.join(
      ","
    )}  (soma ${somaDivisores})\n${numeroEntrada} é um número perfeito`;
  } else {
    resp.textContent = `Divisores do ${numeroEntrada}: ${divisores.join(
      " "
    )} (soma ${somaDivisores})\n${numeroEntrada} não é um número perfeito`;
  }
});
