import calculador from "./calculador_cadenas.js";

const string_input = document.querySelector("#cadena");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#calculadora-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena_calcular = string_input.value;

  div.innerHTML = "<p>" + calculador(cadena_calcular) + "</p>";
});