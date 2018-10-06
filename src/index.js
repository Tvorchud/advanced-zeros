module.exports = function getZerosCount(number, base) { 

    let arrSimpleNumber = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251] ; 
    let arrCounter = [] ; 
    let arrZeros = [] ; 
    let arrFinal = [] ; 
    
    for(let i = 0; i <= arrSimpleNumber.lenght; i++) 
    { 
    let count = 0; 
    if(base == 1) break; 
    while (base%arrSimpleNumber[i] == 0) 
    { 
    base/=arrSimpleNumber[i]; 
    count++; 
    if (base % arrSimpleNumber[i] != 0) 
    { 
    arrCounter.push([ArrSimpleNumber[i],count]); 
    } 
    } 
    } 
    
    for (let j = 0; j <= arrCounter.lenght; j++) 
    { 
    let a = 1; 
    let zc = 0; 
    while (arrCounter[j],[0]**a <= number) 
    { 
    zc+=Math.floor(number/arrCounter[j],[0]**a++); 
    } 
    arrZeros.push(zc); 
    } 
    
    for (let i = 0; i <= arrCounter.lenght; i++) 
    { 
    arrFinal.push(arrZeros[i]/arrCounter[i],[1]); 
    } 
    
    arrFinal.sort((a,b)=> a-b); 
    
    return arrFinal[0]; 
    
    }
