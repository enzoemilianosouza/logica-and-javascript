const forms = document.querySelector("form");
const respCarros = document.querySelector("pre");

const carros = [];

forms.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = forms.inModelo.value;
  const preco = Number(forms.inPreco.value);

  carros.push({ modelo, preco }); //add os dados ao vetor
  forms.inModelo.value = ""; //limpo campos
  forms.inPreco.value = "";
  forms.inModelo.focus();

  console.log(carros);
  forms.btListar.dispatchEvent(new Event("click")); //dispara um evento que equivale a um click no botão
});

forms.btListar.addEventListener("click", () => {
  //"escuta" click em btListar
  if (carros.length === 0) {
    //verifica se tamanho do vetor é 0
    alert("Não há carros na lista!");
    return;
  }

  //concatena uma string, obtendo modelo e preco de cada carro.
  const lista = carros.reduce(
    (acum, carro) =>
      acum + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n",
    ""
  );

  respCarros.innerText = `Lista dos Carros\n ${"-".repeat(40)}\n ${lista}`;
});

forms.btFiltrar.addEventListener("click", () => {
  const carValorMax = Number(
    prompt("Qual valor máximo que o cliente deseja pagar?")
  );

  if (carValorMax == 0 || isNaN(carValorMax)) {
    //verifica se não informou ou se informou inválido
    return;
  }

  //cria um novo [] c/ objs que atendem a condição
  const carrosFilter = carros.filter((carro) => carro.preco <= carValorMax);
  if (carrosFilter.length == 0) {
    alert("não há carros no preço solicitado!");
  }

  let lista = "";
  for (const carro of carrosFilter) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }

  respCarros.innerText = `Carros até R$: ${carValorMax.toFixed(
    2
  )}\n${"-".repeat(40)}\n${lista}`;
});

forms.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual o percentual de desconto?"));

  if (desconto == 0 || isNaN(desconto)) {
    return;
  }

  const carDesconto = carros.map((aux) => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto) / 100,
  }));

  let lista = "";
  for (const carro of carDesconto) {
    lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`;
  }

  respCarros.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(
    40
  )}\n${lista}`;
});
