const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorFruta = form.inFruta.value;
  const valorNumber = Number(form.inNumber.value);

  let resultado = "";

  for (let i = 1; i <= valorNumber; i++) {
    resultado += `${valorFruta} * `;
  }

  resp.innerText = resultado.slice(0, -2);
});
