function contenedorConMasAgua(n) {
    let aguaMaxima = 0;
    for (let i = 0; i < n.length-1; i++) {
        const pivot = n[i];
        for (let j = n.length-1; j > i; j--) {
            const comp = n[j];
            const waterLvl = Math.min(pivot,comp)*(j-i);
            if(waterLvl>aguaMaxima)
                aguaMaxima = waterLvl;
        }
    }    
    return aguaMaxima;
}

console.log(contenedorConMasAgua([1,8,6,2,5,4,8,3,7]));
console.log(contenedorConMasAgua([1,1]));
console.log(contenedorConMasAgua([4,3,2,1,4]));
console.log(contenedorConMasAgua([1,2,1]));