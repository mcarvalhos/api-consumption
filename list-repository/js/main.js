$(function () {
  const t = $("#mainTable").DataTable();

  const getRepositories = (repository) => {
    const url = `https://api.github.com/orgs/${repository}/repos`;

    fetch(url.replace("{repository}", repository))
      .then((response) => {
        if (!response.ok)
          alert("Erro ao executar requisição: " + response.status);
        return response.json();
      })
      .then((resp) => {
        t.clear().draw();

        $(resp).each(function (index, element) {
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
      data-url="${urlContributor}" 
      href="#" >Contributors
    </a>`;
    const issueTagLink = `<a
     class="btnIssue badge badge-info p-2" 
     data-toggle="modal" 
      data-target="#issuesModal" 
     data-url="${urlIssue}" 
     href="#">Issues</a>`;

    const btnContributors = contributorTagLink;
    const btnIssue = issueTagLink;

    t.row.add([item.id, item.name, btnContributors, btnIssue]);
    t.draw();
  }

  $("#search").change(function () {
    const text = $("#search").val();
    getRepositories(text);
  });
});
