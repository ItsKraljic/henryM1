'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /*Tengo que separar los numeros, invertirlos y multiplicarlos por la potencia en base a su posicion para luego sumarlos */
  let unValor = num.split("").reverse();
  let resultado = 0;
  for (let index = 0; index < unValor.length; index++) {
    let potencia = 2**index;
    resultado+= potencia*unValor[index];
    
  }

  return resultado;
  

}

function DecimalABinario(num) {
  // tu codigo aca
  //tengo que dividir  el deciman por 2 y guardarme los restos
  let elNumero = num;
  let resultado = "";
  while (elNumero > 0) {
    resultado = elNumero%2 + resultado;
    elNumero= Math.floor(elNumero/2);
  }
  return resultado;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}