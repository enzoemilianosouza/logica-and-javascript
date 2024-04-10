const prompt = require("prompt-sync")();
console.log("Informe os alunos. Após digite 'FIM' no nome para sair.");

const arrAlunos = [
  {
    nome: "",
    nota: "",
  },
];

//do while é repetição, então eu verifico se nome vai ser == fim.
//se for, quebra a repetição.
do {
  const nomeAluno = prompt("Nome:"); //leio o nome
  if (nomeAluno == "fim" || nomeAluno == "FIM") {
    //verifica antes da nota
    break; //sai da repetição
  }

  const notaAluno = prompt("Nota:");
  arrAlunos.push({ nome: nomeAluno, nota: notaAluno }); //add os dados ao []
  console.log("Ok! Aluno(a) cadastrado(a)...");
} while (true);

console.log("-".repeat(40));

const maiorNota = arrAlunos.reduce((a, b) => Math.max(a, b.nota), 0); //math.max   retorna o maior numero
console.log(maiorNota);

if (maiorNota >= 7) {
  const destaques = arrAlunos.filter((aluno) => aluno.nota == maiorNota); //filtro
  for (const destaque of destaques) {
    console.log(`- ${destaque.nome}`);
  }
} else {
  console.log("Não há destaques!");
}

console.log(arrAlunos);
