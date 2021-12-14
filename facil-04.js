function caracteresConsecutivos(s) {
    let charSaved = s.charAt(0);
    let pow = 0;
    let maxPow = 0;
    for (let i = 0; i < s.length ; i++) {
        const char = s.charAt(i);
        if(char==charSaved)
            pow++;
        else{
            if(maxPow<pow)
                maxPow = pow;
            charSaved = char;
            pow = 1;
            if(s.length-i<maxPow)
                return maxPow;
        }
    }
    if(maxPow<pow)
        maxPow = pow;
    return maxPow;
}

console.log(caracteresConsecutivos('leetcode'));
console.log(caracteresConsecutivos('abbcccddddeeeeedcba'));
console.log(caracteresConsecutivos('triplepillooooow'));
console.log(caracteresConsecutivos('hooraaaaaaaaaaay'));
console.log(caracteresConsecutivos('tourist'));