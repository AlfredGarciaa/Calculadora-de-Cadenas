function get_separator(cadena){
  var cadenaArray;

  cadenaArray = cadena.split(/[[\n ]+/);

  return splitAdd(cadenaArray[2], cadenaArray[1].slice(0,-1));
}

export {get_separator};
import {splitAdd} from './delimilitador_cadenas.js';