const forms = document.querySelector("form");
const respostaNome = document.querySelector("span");
const respostaLista = document.querySelector("pre");

const pacientes = []; //declara vetor global

forms.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o envio do forms

  const pacienteNome = forms.inPaciente.value; //nome do paciente
  pacientes.push(pacienteNome); //adiciona o nome no final do vetor

  let lista = ""; //string para concatenar pacientes

  for (let i = 0; i < pacientes.length; i++) {
    //for tradicional, inicia em 0, enquanto menor que tamanho do array
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }

  respostaLista.innerText = lista; //exibe a lista de pacientes na página
  forms.inPaciente.value = ""; //limpa conteúdo do campo de formulário
  forms.inPaciente.focus(); //posiciona o cursor no campo
});

//adiciona "ouvinte" para o evento click no botão urgência

forms.btnUrgencia.addEventListener("click", () => {
  //verifica se as validações do form estão ok (paciente is required)
  if (!forms.checkValidity()) {
    alert("Informe o nome do Paciente a ser atendido em caráter de urgência!");
    forms.inPaciente.focus();
    return;
  }

  const pacienteNome = forms.inPaciente.value;
  pacientes.unshift(pacienteNome); //adiciona no inicio do vetor

  let lista = "";

  //forEach sobre array de pacientes
  pacientes.forEach((paciente, i) => {
    lista += `${i + 1}. ${paciente}\n`;
    respostaLista.innerText = lista;
    forms.inPaciente.value = "";
    forms.inPaciente.focus();
  });
});

forms.btnAtender.addEventListener("click", () => {
  if (pacientes.length === 0) {
    alert("Não há lista de espera!");
    forms.inPaciente.focus();
    return;
  }

  const atender = pacientes.shift(); //remove o inicio da fila e obtém o nome
  respostaNome.innerText = atender;

  let lista = "";

  pacientes.forEach((paciente, i) => {
    lista = +`${i + 1}. ${pacientes}\n`;
    respostaLista.innerText = lista;
  });
});
