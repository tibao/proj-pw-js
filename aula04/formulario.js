let proximold = 1;

function adicionarLinha() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const admissao = document.getElementById("admissao").value;
  const demissao = document.getElementById("demissao").value;

  if (nome === '' || idade === '' || admissao === ''){
    alert("Preencha os valores do formulário!");
  } else {
    const tabela = document.getElementById("tabeladados").getElementsByTagName("tbody")[0];

    const novaLinha = tabela.insertRow();

    const celId = novaLinha.insertCell(0);
    const celNome = novaLinha.insertCell(1);
    const celIdade = novaLinha.insertCell(2);
    const celAdmissao = novaLinha.insertCell(3);
    const celDemissao = novaLinha.insertCell(4);

    celId.innerHTML = proximold;
    celNome.innerHTML = nome;
    celIdade.innerHTML = idade;
    celAdmissao.innerHTML = admissao;
    celDemissao.innerHTML = demissao;

    proximold++;

    document.getElementById("linhaFormulario").reset();
  }
}
