const form = document.querySelector("form");
const resph3 = document.querySelector("h3");

const arrNome = [];
const arrAcertos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = form.inNome.value;
  const acertos = Number(form.inNumber.value);

  if (arrNome && arrAcertos) {
    arrNome.push(nome);
    arrAcertos.push(acertos);
  }
  form.reset();

  form.inListar.dispatchEvent(new Event("click"));
});

form.inListar.addEventListener("click", () => {
  let lista = "";

  for (let i = 0; i < arrNome.length; i++) {
    lista += `${arrNome[i]} - ${arrAcertos[i]} acertos \n`;
  }
  resph3.innerText = lista;
});

form.inAprove.addEventListener("click", () => {
  const arrProves = [];
  const arrNomeProves = [];
  let lista = [];

  const nAproves = Number(prompt("Nº de acertos para aprovação?"));

  for (let i = 0; i < arrNome.length; i++) {
    if (arrAcertos[i] >= nAproves) {
      arrProves.push(arrAcertos[i]);
      arrNomeProves.push(arrNome[i]);
    }
    console.log(arrProves);
    console.log(arrNomeProves);
  }

  // Preenche a lista com nome e acertos emparelhados
  for (let i = 0; i < arrNomeProves.length; i++) {
    lista.push(`${arrNomeProves[i]} - ${arrProves[i]}`);
  }

  // Inverte a lista
  const listResult = lista.reverse();

  // Exibe o resultado no resph3 com quebras de linha
  resph3.innerHTML = listResult.join("<br>");
});
