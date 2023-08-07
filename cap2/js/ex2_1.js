// cria ref ao form e ao h3 (onde vai ser exibido a resposta)
const form = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um 'ouvinte' de evento, acionado quando o botão submit for clicado
form.addEventListener("submit", (e) => {
  const nome = form.inNome.value; //obtem o nome digitado
  resp.innerText = `Olá ${nome}`; //exibe resposta

  e.preventDefault(); //evita o envio do forms.
});

//com o getElementById precisamos de um ID pra ser referenciado
//com o querySelector() é mais amplo, permite criar um ref através do tag name, id ou classe. *1° element da pág.*
// const resp = document.querySelector("h3"); aqui ref o 1° elemento h3 da pág.

// const nome = document.querySelector('form').inNome.value - acessaria diretamente a propriedade
