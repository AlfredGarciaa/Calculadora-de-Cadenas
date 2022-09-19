function splitAdd(cadena, separador){
  var res = 0, cadenaArray;

  if(separador === ""){
    cadenaArray = cadena.split(/[,-]+/);
  }else cadenaArray = cadena.replaceAll(separador, ',').split(/[,-]+/);
  
  for(var i = 0; i < cadenaArray.length ; i++){
    res = res + parseInt(cadenaArray[i]);
  }
  
  return res;
}

export {splitAdd};