let digitos = [9,9,9,9,9]
console.log(digitos);
let residuo = 1;
let result = [];

for (let i = digitos.length-1; i>=0;i--){
    if ((digitos[i] + residuo) == 10) {
        residuo = 1;
        result.push(0)
    }else{
        result.push(digitos[i]+residuo)
        residuo = 0;      
    }
}

if (residuo==1){
    result.push(1)
}

result = result.reverse()
console.log(result);