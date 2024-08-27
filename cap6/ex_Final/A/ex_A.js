const forms = document.querySelector("form");
const resposta = document.querySelector("h3");

const clubes = [];

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  const nomeClube = forms.inClube.value;
  if (nomeClube) {
    clubes.push(nomeClube);
  }

  forms.reset();
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
  if (clubes.length === 0) {
    alert("não há clubes!");
    return;
  }

  console.log(clubes);
  if (clubes.length % 2 == 0) {
    let lista = "";
    // estou garantindo que o loop percorra apenas até a metade do array.
    for (let i = 0; i < clubes.length / 2; i++) {
      // calcula o índice do último elemento do array e subtrai o valor de i do último índice.
      lista += `${clubes[i]} X ${clubes[clubes.length - 1 - i]}\n\n`;
    }

    resposta.innerText = `${lista}`;
  } else {
    alert(
      "Não é possível gerar uma tabela pela quantidade insuficiente de clubes!"
    );
  }
});
