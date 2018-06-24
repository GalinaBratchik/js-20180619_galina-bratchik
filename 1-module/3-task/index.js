'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const stringArray = str.split(/[' ',]/)
  let numbersArray = []
  
  for (let i = 0; i< stringArray.length; i++ ) {
    const number = parseFloat(stringArray[i])
    if (!isNaN(number)) 
    { 
      numbersArray.push(number)
    }
  }

  numbersArray= numbersArray.sort((a,b) => {
    if (a > b) return 1
    if (a < b) return -1
  })
  return {min:numbersArray[0], max:numbersArray[numbersArray.length -1 ]} 
}


console.log(getMinMax('25,-1,-234,4,   1000'))