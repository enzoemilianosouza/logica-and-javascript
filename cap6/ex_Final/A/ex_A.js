const forms = document.querySelector("form");
const resposta = document.querySelector("h3");

const clubes = [];

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  const nomeClube = forms.inClube.value;
  if (nomeClube) {
    clubes.push(nomeClube);
  }

  console.log(clubes);
  forms.btListar.dispatchEvent(new Event("click"));
});

forms.btListar.addEventListener("click", () => {
  if (clubes.length === 0) {
    alert("não há clubes!");
    return;
  }

  let lista = "";
  for (let i = 0; i < clubes.length; i++) {
    lista += `${i + 1}. ${clubes[i]}\n`;
  }

  resposta.innerText = lista;
});

forms.btMontar.addEventListener("click", () => {
  //criar tabela dos jogos
});
