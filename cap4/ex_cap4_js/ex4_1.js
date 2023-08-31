const forms = document.querySelector("form");
const respostaUm = document.querySelector("h3");
const respostaDois = document.querySelector("h4");

forms.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeAluno = forms.inNome.value;
  const nota1 = Number(forms.inNota1.value);
  const nota2 = Number(forms.inNota2.value);

  const somaMedia = (nota1 + nota2) / 2;
  const somaFinal = somaMedia;

  respostaUm.innerText = `Média das Notas ${somaFinal.toFixed(2)}`;

  if (somaFinal >= 7.0) {
    respostaDois.innerText = `Parabéns ${nomeAluno}! Você foi aprovado(a)`;
    respostaDois.style.color = "blue";
  } else if (somaFinal >= 4) {
    respostaDois.innerText = `${nomeAluno}, agende sua prova de recuperação! kkk`;
    respostaDois.style.color = "orange";
  } else {
    respostaDois.innerText = `${nomeAluno}, você reprovou!`;
    respostaDois.style.color = "red";
  }
});
