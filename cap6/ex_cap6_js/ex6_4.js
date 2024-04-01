const form = document.querySelector("form");
const resp = document.querySelector("h3");

const arrChild = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameChild = form.inName.value;
  const ageChild = Number(form.inAge.value);
  console.log(nameChild, ageChild);

  arrChild.push({ nameChild, ageChild });
  form.inName.value = "";
  form.inAge.value = "";
  form.inName.focus();

  console.log(arrChild);
  form.btList.dispatchEvent(new Event("click")); //disparo evento que criei abaixo.
});

form.btList.addEventListener("click", (e) => {
  if (arrChild.length === 0) {
    alert("Não há dados de criança!");
    return;
  }

  let lista = "";
  for (const child of arrChild) {
    const { nameChild, ageChild } = child;
    lista += nameChild + " - " + ageChild + " anos\n";
  }

  resp.innerText = lista;
  //resolvi como está abaixo mas também encontrei uma nova solução acima:
  // const lista = arrChild.reduce(
  //   (acum, item) => acum + item.nameChild + " - " + item.ageChild + " anos \n", // Adiciona uma quebra de linha entre cada item
  //   ""
  // );
  // console.log(lista);
  // resp.innerText = `Lista de nome e idade:\n${lista}`; // Exibe a lista com uma quebra de linha no inícios
});

form.btResum.addEventListener("click", () => {
  if (arrChild.length === 0) {
    alert("Não há crianças na lista");
    return;
  }

  const copia = [...arrChild];
  copia.sort((a, b) => a.ageChild - b.ageChild);

  let resumo = "";
  let aux = copia[0].ageChild;

  let arrNames = [];

  for (const child of copia) {
    const { nameChild, ageChild } = child;
    if (ageChild === aux) {
      arrNames.push(nameChild);
    } else {
      resumo += aux + " ano(s): " + arrNames.length + " criança(s) - "; //ex: 'valor da idade' anos - 'quantidade de item no array'
      resumo += ((arrNames.length / copia.length) * 100).toFixed(2) + "%\n"; //os items adds no arrNames / pelos items de copia
      resumo += "(" + arrNames.join(", ") + ")\n\n"; //nome das crianças ex: (ana, july)

      aux = ageChild; // atualizando aux para que ela armazene a idade (ageChild) da criança atual
      arrNames = [];
      arrNames.push(nameChild); // adicionamos o nome da criança atual (nameChild) ao array
    }
  }

  // Adiciona a última criança
  //Dps de sair do loop, add a última criança ao resumo, pois n será capturada pelo bloco else anterior.
  resumo += aux + " ano(s): " + arrNames.length + " criança(s) - ";
  resumo += "(" + arrNames.join(", ") + ")\n\n";
  resp.innerText = resumo;
});
