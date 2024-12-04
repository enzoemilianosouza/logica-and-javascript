const form = document.querySelector("form");
const resposta = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value.trim();

  if (!nome.includes(" ")) {
    alert("Digite seu nome completo!");
  }

  const priNome = nome.indexOf(" ");
  const ultNome = nome.lastIndexOf(" ");

  const nomeCracha = nome.substr(0, priNome) + nome.substr(ultNome);

  if (nome.includes(" ")) {
    resposta.innerHTML = " Nome para crachá: " + nomeCracha;
  }
});
