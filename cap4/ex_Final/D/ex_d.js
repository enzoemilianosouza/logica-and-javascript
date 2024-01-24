const form = document.querySelector("form");
const resLado = document.querySelector("h3");
const resTipo = document.querySelector("h2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = parseInt(form.inA.value);
  const ladoB = parseInt(form.inB.value);
  const ladoC = parseInt(form.inC.value);

  const doisLados =
    ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;
  // verificar se todos os lados são iguais.

  if (doisLados) {
    if (ladoA == ladoB && ladoB == ladoC) {
      resTipo.innerText = "Lados podem formar um EQUILÁTERO";
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
      resTipo.innerText = "Lados podem formar um ESCALENO";
    } else {
      resTipo.innerText = "Lados podem formar um ISÓSCELES";
    }
  } else {
    resTipo.innerText = "Lados NÃO podem formar um triângulo!";
  }
});
