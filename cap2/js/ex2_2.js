const form = document.querySelector("form");
const respTitulo = document.querySelector("h3");
const respDuracao = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  const titulo = form.inTitulo.value;
  const duracao = Number(form.inDuracao.value);

  const horas = Math.floor(duracao / 60);
  const minutos = duracao % 60;

  respTitulo.innerText = `O filme é ${titulo}`;
  respDuracao.innerText = `${horas} horas(s) e ${minutos} minutos(s)`;
  e.preventDefault();
});
