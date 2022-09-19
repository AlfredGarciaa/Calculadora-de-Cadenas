function splitAdd(cadena, separador){
  var res = 0;

  if(separador != ""){
    cadena = cadena.replaceAll(separador, ",");
  }
  var cadenaArray = cadena.split(/[[,-]+/);

  for(var i = 0; i < cadenaArray.length ; i++){
    if( parseInt(cadenaArray[i]) < 1000)
    res = res + parseInt(cadenaArray[i]);
  }
  
  return res;
}

export {splitAdd};