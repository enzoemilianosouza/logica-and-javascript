const form = document.querySelector("form");
const h3 = document.getElementById("inDescubra");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameFruit = form.inFruta.value.toUpperCase();
  console.log(nameFruit);

  let resposta = "";

  for (const letra of nameFruit) {
    if (letra == nameFruit.charAt(0)) {
      resposta += nameFruit.charAt(0);
    } else {
      resposta += "_ ";
    }
  }

  h3.innerHTML = resposta;
  form.inFruta.value = "*".repeat(nameFruit.length);
});
