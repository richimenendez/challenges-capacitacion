
function numeroPalindromo(numero) {
    const strNum = numero.toString().split("");
    return strNum.join() === strNum.reverse().join();
}

console.log(numeroPalindromo(121));
console.log(numeroPalindromo(-121));
console.log(numeroPalindromo(10));
console.log(numeroPalindromo(1010101010));
console.log(numeroPalindromo(10101010101));