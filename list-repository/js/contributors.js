$(function () {
  $(document).on("click", ".btnContributor", (event) => {
    const contributorsTable = $("#contributorsModalTable").DataTable(); //2. transforma em datatable

    const getContributors = (contributor) => {
      const url = event.target.dataset.url;

      fetch(url)
        .then((response) => {
          if (!response.ok)
            alert("Erro ao executar requisição: " + response.status);
          return response.json();
        })
        .then((resp) => {
          contributorsTable.clear().draw();

          $(resp).each(function (index, element) {
            bindContributorToTable(element);
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    function bindContributorToTable(item) {
      contributorsTable.row
        .add([item.id, item.login, item.contributions])
        .draw(false);
    }

    getContributors();
  });
});
