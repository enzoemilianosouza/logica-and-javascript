const form = document.querySelector("form");
const resposta = document.querySelector("h2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const horaBrasil = Number(form.inHora.value);
  let horaFrança = horaBrasil + 5;

  if (horaFrança > 24) {
    horaFrança = horaFrança - 24;
  }

  resposta.innerText = `Hora na frança: ${horaFrança.toFixed(2)}`;
});

//tentar resolver sem o if, resolver com %.
