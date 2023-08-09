const form = document.querySelector("form");
const respTitulo = document.querySelector("h3");
const respDuracao = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o envio do form

  const titulo = form.inTitulo.value; //recebe o valor dos campos
  const duracao = Number(form.inDuracao.value);

  const horas = Math.floor(duracao / 60); //arredonda para baixo o resultadp
  const minutos = duracao % 60; //obtém o resto da divisão

  respTitulo.innerText = `O filme é ${titulo}`; //exibe as respostas
  respDuracao.innerText = `${horas} horas(s) e ${minutos} minutos(s)`;
});
