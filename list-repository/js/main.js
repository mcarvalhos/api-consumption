const search = document.getElementById("search");
const url = "https://api.github.com/orgs/";
const uri = "/repos";

const getRepository = async (repos) => {
  const reposResponse = await fetch(`${url}${repos}${uri}?per_page=20?created: desc`)
    .then((response) => {
      if (!response.ok)
        throw new Error("Erro ao executar requisição " + response.status);
      return response.json();
    })
    .then((repos) => {
      showRepos(repos)
    })
    .catch((error) => {
      console.log(error.message);
    });
};

function showRepos(repos) {
  let element = document.getElementById("element");

  for (const repo of repos) {
    element.innerHTML += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <a href="${repo.contributors_url}">
          <span class="badge badge-primary">Contributors: </span> 
            </a>  
          <a href="${repo.issues_url}" target="blank">
            <span class="badge badge-success">Issues: ${repo.open_issues_count}</span>
          </a>
          </div>
        </div>
      </div>`;
  }
}

search.addEventListener("keyup", (event) => {
  const repos = event.target.value;

  repos.length > 0
    ? getRepository(repos).then((res) => console.log(res))
    : null;

  console.log(repos);
});




