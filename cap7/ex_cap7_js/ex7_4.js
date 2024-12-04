const form = document.querySelector("form");
const resposta = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value.trim();

  if (!nome.includes(" ")) {
    alert("Digite seu nome completo!");
  }

  const partes = nome.split(" ");

  let email = "";

  const tamNome = partes.length;

  for (let i = 0; i < tamNome - 1; i++) {
    email += partes[i].charAt(0);
  }

  email += partes[tamNome - 1] + "@empresa.com.br";

  if (nome.includes(" ")) {
    resposta.innerHTML = " Seu Email institucional é: " + email;
  }
});
