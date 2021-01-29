const fields = document.querySelectorAll("[required");

const validateField = (field) => {
  //lógica para verificar se existem erros
  const verifyErrors = () => {
    let foundError = false;

    for (let error in field.validity) {
      // se não for customError
      // então verifica e tem erro
      field.validity[error] && !field.validity.valid
        ? (foundError = error)
        : null;
    }

    console.log(foundError);
    return foundError;
  };

  const customMessage = (typeError) => {
    const messages = {
      text: {
        valueMissing: "Por favor, preecha este campo",
      },
      email: {
        valueMissing: "Por favor, digite seu email",
        typeMismatch: "Por favor, preecha com um email válido",
      },
      date: {
        valueMissing: "Por favor, digite sua data de nascimento",
      },
      number: {
        valueMissing: "Por favor, preecha este campo",
      },
    };
    return messages[field.type][typeError];
  };

  const setCustomMessage = (message) => {
    const spanError = field.parentNode.querySelector("span.error");

    if (message) {
      spanError.classList.add("active");
      spanError.innerHTML = message;
    } else {
      spanError.classList.remove("active");
      spanError.innerHTML = "";
    }
  };
  return () => {
    const error = verifyErrors();

    if (error) {
      const message = customMessage(error);

      field.style.borderColor = "red";
      setCustomMessage(message);
    } else {
      field.style.border = "1px solid green";
      setCustomMessage();
    }
  };
};

const customValidation = (event) => {
  const field = event.target;
  const validation = validateField(field);

  validation();

  document.querySelector("form").addEventListener("submit", (event) => {
    // não vai enviar o formulário
    event.preventDefault();
    console.log("dados corretos: " + field.value);
  });
};

for (field of fields) {
  field.addEventListener("invalid", (event) => {
    //eliminar o bubble
    event.preventDefault();

    customValidation(event);
  });
  field.addEventListener("blur", customValidation);
}
