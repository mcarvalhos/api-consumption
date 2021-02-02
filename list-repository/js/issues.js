$(function () {
  $(document).on("click", ".btnIssue", (event) => {
    const issuesTable = $("#issuesModalTable").DataTable();

    const getIssues = (issue) => {
      const originalUrl = event.target.dataset.url;
      const url = originalUrl.replace("{/number}", "");

      fetch(url)
        .then((response) => {
          if (!response.ok)
            alert("Erro ao executar requisição: " + response.status);
          return response.json();
        })
        .then((resp) => {
          issuesTable.clear().draw();

          $(resp).each(function (index, element) {
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
        data-url="${urlComment}" 
        href="#" >Comments
      </a>`;

      const btnComment = commentTagLink;

      issuesTable.row
        .add([item.id, item.number, item.title, btnComment, item.state])
        .draw(false);
    }

    getIssues();
  });
});
