// comentar os passos aqui

$(function () {
  //1. Inicialização da página

  $(document).on("click", ".btnIssue", (event) => {
    const issuesTable = $("#issuesModalTable").DataTable(); //2. transforma em datatable

    const getIssues = async (issue) => {
      const urlGeted = event.target.dataset.url;
      const url = urlGeted.replace("{/number}", "");

      const issueResponse = await fetch(url) //5. Monta a URL
        .then((response) => {
          if (!response.ok)
            alert("Erro ao executar requisição: " + response.status);
          return response.json();
        })
        .then((resp) => {
          //6. Recebeu resposta

          issuesTable
            .clear() //9. limpa a tabela para fazer uma nova pesquisa
            .draw();

          $(resp).each(function (index, element) {
            //7. Foreach no array utilizando o jQuery
            bindIssueToTable(element);
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    function bindIssueToTable(item) {
      const urlComment = item.comments_url;

      const commentTagLink = `<a
        class="btnComment badge badge-warning p-2" 
        data-toggle="modal" 
        data-target="#commentsIssuesModal" 
        data-url="{url}" 
        href="#" >Comments
      </a>`;

      const btnComment = commentTagLink.replace("{url}", urlComment);

      issuesTable.row
        .add([
          //8. Adiciona linha para cada item da resposta
          item.id,
          item.number,
          item.title,
          btnComment,
          item.state,
        ])
        .draw(false);
    }

    getIssues(); //4 Passa para a função de busca
  });
});
