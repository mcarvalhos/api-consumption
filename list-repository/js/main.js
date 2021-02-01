//1. Inicialização da página
$(function () {
  const t = $("#tabelaZik").DataTable(); //2. transforma em datatable

  const getRepositories = async (repository) => {
    const url = `https://api.github.com/orgs/${repository}/repos`;

    const reposResponse = await fetch(url.replace("{repository}", repository)) //5. Monta a URL
      .then((response) => {
        if (!response.ok)
          alert("Erro ao executar requisição: " + response.status);
        return response.json();
      })
      .then((resp) => {
        //6. Recebeu resposta

        t.clear() //9. limpa a tabela para fazer uma nova pesquisa
          .draw();

        $(resp).each(function (index, element) {
          //7. Foreach no array utilizando o jQuery
          bindItemToTable(element);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  function bindItemToTable(item) {
    const urlContributor = item.contributors_url;
    const urlIssue = item.issues_url;

    const contributorTagLink = `<a
      class="btnContributor badge badge-primary p-2" 
      data-toggle="modal" 
      data-target="#contributorsModal" 
      data-url="{url}" 
      href="#" >Contributors
    </a>`;
    const issueTagLink = `<a
     class="btnIssue badge badge-info p-2" 
     data-toggle="modal" 
      data-target="#issuesModal" 
     data-url="{url}" 
     href="#">Issues</a>`;

    const btnContributors = contributorTagLink.replace("{url}", urlContributor);
    const btnIssue = issueTagLink.replace("{url}", urlIssue);

    t.row.add([
      //8. Adiciona linha para cada item da resposta
      item.id,
      item.name,
      btnContributors,
      btnIssue,
    ]);
    t.draw();
  }

  $("#search").change(function () {
    //3. Pega o valor digitado
    const text = $("#search").val();
    getRepositories(text); //4 Passa para a função de busca
  });
});
