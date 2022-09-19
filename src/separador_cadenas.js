function get_separator(cadena) {
  var cadenaArray = cadena.split(/[[\s]+/), num = cadenaArray.length - 1;
  
  for (var i = 1; i < cadenaArray.length - 1; i++) {
    cadenaArray[num] = cadenaArray[num].replaceAll(cadenaArray[i].slice(0, -1), ",");
  }

  return splitAdd(cadenaArray[num]);
}

export {get_separator};
import {splitAdd} from './delimilitador_cadenas.js';