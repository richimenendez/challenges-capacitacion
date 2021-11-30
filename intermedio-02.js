const comparador = (primero,segundo) =>{
    return primero[0]==segundo[0]&&primero[1]==segundo[1]&&primero[2]==segundo[2]
}

function sum3(numArray) {
    let result = [];
        for (let i = 0; i < numArray.length-2; i++) {
            let num1 = numArray[i];
            for (let j = i+1; j < numArray.length-1; j++) {
                let num2 = numArray[j];
                for (let k = j+1; k < numArray.length; k++) {
                    const num3 = numArray[k];
                        if(num1+num2+num3 == 0 ){ 
                            const aux = [num1,num2,num3].sort();
                            if (!result.some(e => comparador(e,aux)))
                                result.push(aux);
                        }
                }
            }
        }
    return result;
}

console.log(sum3([-1,0,1,2,-1,-4]));
console.log(sum3([]));
console.log(sum3([0]));
console.log(sum3([0,0,0]));
console.log(sum3([1,-2,3,-4,0]));