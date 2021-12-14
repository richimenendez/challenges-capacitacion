function subPalindromo(s)
{   
    let palindromo = s.charAt(0);
    for (let i = 0; i < s.length && s.length-1>=palindromo.length; i++) {
        const char = s.charAt(i);
        for (let j = s.length-1; j > i && j-i>=palindromo.length; j--) {
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
console.log(subPalindromo('acbhdsasasasghft'));
console.log(subPalindromo('acbhdsaasbbaabbghft'));
console.log(subPalindromo('aaaaaaacbhdsaasbbaabbghfaaatbbbbbb'));