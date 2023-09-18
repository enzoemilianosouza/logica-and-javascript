const form = document.querySelector("form");
const body = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const saque = Number(form.inSaque.value);

  const valorNotas = [100, 50, 10];
  let valorRestante = saque;

  const wrapper = document.createElement("div");
  valorNotas.forEach((nota) => {
    const quantidadeNotas = Math.floor(valorRestante / nota);

    if (valorRestante >= nota) {
      valorRestante = valorRestante - nota * quantidadeNotas;
      console.log({ valorRestante, [nota]: quantidadeNotas });
      const resp = document.createElement("h2");
      resp.innerText = `Notas de R$ ${nota}: ${quantidadeNotas} `;
      wrapper.appendChild(resp);
    }
  });

  body.append(wrapper);

  // if (saque % 10 != 0) {
  //   //verifica se saque é multiplo de 10,
  //   // o valor não pode ser dividido por 10 sem deixar resto
  //   alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
  //   form.inSaque.focus(); //método que é usado para dar foco a um elemento
  //   return;
  // }

  // const notasCem = Math.floor(saque / 100); //calcula notas de 100
  // let resto = saque % 100; //quanto sobra pra pagar
  // const notasCinquenta = Math.floor(saque / 50);
  // resto = resto % 50; //quanto sobra pra pagar
  // const notasDez = Math.floor(resto / 10);
  // if (notasCem > 0) {
  //   resp1.innerText = `Notas de R$ 100: ${notasCem}`;
  // }
  // if (notasCinquenta > 0) {
  //   resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
  // }
  // if (notasDez > 0) {
  //   resp3.innerText = `Notas de R$ 10: ${notasDez}`;
  // }
});

// N fiz sozinho
