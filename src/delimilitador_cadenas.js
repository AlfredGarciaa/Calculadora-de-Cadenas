function splitAdd(cadena) {
  var res = 0, cadenaArray = cadena.split(/[,-]+/);

  for (var i = 0; i < cadenaArray.length; i++) {
    if (parseInt(cadenaArray[i]) <= 1000)
      res = res + parseInt(cadenaArray[i]);
  }
  
  return res;
}

export {splitAdd};