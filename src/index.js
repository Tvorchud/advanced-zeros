module.exports = function getZerosCount(number, base) {
  // your implementation
  let arrSimple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]; 
  let arrCounter = [];
  let arrZeros = [];
  let arrFinal = [];
  for (let i = 0; i < arrSimple.length; i++)
  { 
    let count = 0;
    if(base == 1) break;
    while (base%arrSimple[i]==0)
    {
      base/=arrSimple[i];
      count++
      if (base%arrSimple[i] != 0){
        arrCounter.push([arrSimple[i],count]);
      }
    } 
  } 
  for (let j = 0; j<arrCounter.length; j++) 
  {
    let zc = 0;
    let a = 1;
    while (arrCounter[j][0]**a <= number)
    {
      zc+=Math.floor(number/arrCounter[j][0]**a++);
    }
    arrZeros.push(zc);
  }
  
  for (let i = 0; i<arrCounter.length; i++)
  {
     arrFinal.push(Math.floor(arrZeros[i]/arrCounter[i][1]));
  }
  arrFinal.sort((a,b)=> a-b);
  return arrFinal[0];
}
