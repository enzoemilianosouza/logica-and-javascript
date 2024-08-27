const formulario = document.querySelector("form");
const resh3 = document.querySelector("h3");
const resh4 = document.querySelector("h4");

const arrNumero = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorNumero = Number(formulario.inNumber.value);
  console.log(valorNumero);

  if (arrNumero.includes(valorNumero)) {
    alert("Você já adicionou esse número!");
    formulario.reset();
  } else {
    arrNumero.push(valorNumero);
    formulario.reset();
  }

  console.log(arrNumero);
  resh3.innerText = `A lista de números é: ${arrNumero}`;
});

formulario.btOrdem.addEventListener("click", () => {
  let state = true;
  for (let i = 0; i < arrNumero.length - 1; i++) {
    if (arrNumero[i] >= arrNumero[i + 1]) {
      state = false;
    } else {
      state = true;
    }
  }

  if (state) {
    resh4.innerText = "A lista está na ordem crescente!";
  } else {
    resh4.innerText = "Atenção...não está na ordem crescente!";
  }
});
