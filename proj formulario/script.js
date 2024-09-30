let proximoid = 1

function adicionarLinha () {
    const ID = document.getElementById("ID").value;
    const produto= document.getElementById("produto").value;
    const marca= document.getElementById("marca").value;
    const segmento= document.getElementById("segmento").value;
    const valor= document.getElementById("valor").value;
    const datadavenda= document.getElementById("datadavenda").value;
    if (ID === '' || produto === '' || marca === '' || segmento === '' || valor === '' || datadavenda === ''){
        alert("Preencha o formulário!");
      } else {
        const tabela = document.getElementById("tabeladados").getElementsByTagName("tbody")[0];

    const novaLinha = tabela.insertRow();

    const celID = novaLinha.insertCell(0);
    const celProduto = novaLinha.insertCell(1);
    const celMarca = novaLinha.insertCell(2);
    const celSegmento = novaLinha.insertCell(3);
    const celValor = novaLinha.insertCell(4);
    const celDatadavenda = novaLinha.insertCell(5);

    celID.innerHTML = proximold;
    celProduto.innerHTML = produto;
    celMarca.innerHTML = marca;
    celSegmento.innerHTML = segmento;
    celValor.innerHTML = valor;
    celDatadavenda.innerHTML = datadavenda;

    proximold++;

    document.getElementById("linhaFormulario").reset();
  }
}

