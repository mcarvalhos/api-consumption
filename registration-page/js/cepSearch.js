const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    document.querySelector("#" + campo)
      ? (document.querySelector("#" + campo).value = result[campo])
      : null;
  }
};

cep.addEventListener("blur", (event) => {
  const search = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://api.postmon.com.br/v1/cep/${search}`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((err) => {
      console.log("Deu erro: " + err.message);
    });
});
