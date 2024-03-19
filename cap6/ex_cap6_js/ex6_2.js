const form = document.querySelector("form");

const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = []; // vetor global com números já apostados
const sorteado = Math.floor(Math.random() * 100 + 1); // número aleatório entre 1 e 100
const CHANCES = 6; // constante com o número máximo de chances

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.inNumber.value);

  if (numero === sorteado) {
    respDica.innerText = `Parabéns! Número sorteado: ${sorteado}`;
    form.btnSubmit.disabled = true;
    form.btNovo.className = "exibe";
  } else {
    if (erros.includes(numero)) {
      alert(`Você já apostou esse número ${numero}! Tente outro...`);
    } else {
      erros.push(numero); // adiciona número ao vetor
      const numErros = erros.length; // tamanho do vetor
      const numChances = CHANCES - numErros; // calcula número de chances

      // exibe número de erros, conteúdo do vetor e número de chances
      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram...");
        form.btnSubmit.disabled = true;
        form.btNovo.className = "exibe";
        respDica.innerText = `Game Over!! Número sorteado: ${sorteado}`;
      } else {
        // operador ternário para mensagem da dica
        const dica = numero < sorteado ? "maior" : "menor";
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
  }

  form.btNovo.addEventListener("click", (e) => {
    location.reload();
  });

  form.inNumber.value = "";
  form.inNumber.focus();
});
