// comentar os passos aqui

$(function () {
  //1. Inicialização da página
  $(document).on("click", ".btnContributor", (event) => {
    const contributorsTable = $("#contributorsModalTable").DataTable(); //2. transforma em datatable

    const getContributors = async (contributor) => {
      const url = event.target.dataset.url;

      const contributorResponse = await fetch(url) //5. Monta a URL
        .then((response) => {
          if (!response.ok)
            alert("Erro ao executar requisição: " + response.status);
          return response.json();
        })
        .then((resp) => {
          //6. Recebeu resposta

          contributorsTable
            .clear() //9. limpa a tabela para fazer uma nova pesquisa
            .draw();

          $(resp).each(function (index, element) {
            //7. Foreach no array utilizando o jQuery
            bindContributorToTable(element);
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    function bindContributorToTable(item) {
      contributorsTable.row
        .add([
          //8. Adiciona linha para cada item da resposta
          item.id,
          item.login,
          item.contributions,
        ])
        .draw(false);
    }

    getContributors(); //4 Passa para a função de busca
  });
});
