function calculador(cadena) {
  var res = 0;

  if (cadena === "") {
    res = 0;
  } else if (cadena[0] === '/') {
    res = get_separator(cadena);
  } else if (cadena.search(",") != -1 || cadena.search("-") != -1) {
    res = splitAdd(cadena);
  } else res = parseInt(cadena);

  return res;
}

export default calculador;
import {get_separator} from './separador_cadenas.js';
import {splitAdd} from './delimilitador_cadenas.js';