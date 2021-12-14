function subPalindromo(s)
{   
    let palindromo = s.charAt(0);
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        let j = s.length-1;
        if(s.length-i<palindromo.length)
            return palindromo;
        for (let j = s.length-1; j > i; j--) {
            const char2 = s.charAt(j);
            if(char == char2){
                const cad = s.substring(i,j+1);
                const reverse = cad.split("").reverse().join("");
                if(cad == reverse){
                    if(cad.length>palindromo.length)
                        palindromo = cad;
                    break;
                }
            }
        }
    }
    return palindromo;
}

console.log(subPalindromo('babad'));
console.log(subPalindromo('cbbd'));
console.log(subPalindromo('a'));
console.log(subPalindromo('ac'));