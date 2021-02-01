// comentar os passos aqui

$(function () {
  //1. Inicialização da página
  $(document).on("click", ".btnComment", (event) => {
    const getComments = async (comments) => {
      const url = event.target.dataset.url;

      const commentResponse = await fetch(url) //5. Monta a URL
        .then((response) => {
          if (!response.ok)
            alert("Erro ao executar requisição: " + response.status);
          return response.json();
        })
        .then((comments) => {
          //6. Recebeu resposta
          showComments(comments);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    function showComments(comments) {
      let element = document.getElementById("commentsIssuesModalBody");

      const html = comments.map((comment) => {
        return `
        <div class="card p-3 mb-3">
          <div class="card-body ">
            <div class="media ">
              <img src="${comment.user.avatar_url}" alt="Profile Image" rounded-circle width="64" class="align-self-start mr-3"/>
              <div class="media-body">
                <h3 class="">${comment.user.login}</h3>
                <p><strong>Comentou: </strong> ${comment.body}</p>
                <p><strong>Associação do autor: </strong> ${comment.author_association}</p>
                <a class="badge badge-warning col-3 p-3" href="${comment.html_url}">Ver perfil no Github</a>
              </div>
            </div>
          </div>
        </div>`;
      });

      element.innerHTML = html.join("");
    }

    getComments(); //4 Passa para a função de busca
  });
});
