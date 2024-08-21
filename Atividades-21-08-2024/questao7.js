function soma(a, b) {
    return a + b;
}

function ehPar(numero) {
    return numero % 2 === 0;
}

function dobraValores(array) {
    return array.map(valor => valor * 2);
}

function contaCaracteres(string) {
    return string.length;
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log("Soma de 5 e 3:", soma(5, 3)); // 8
console.log("O número 4 é par?", ehPar(4)); // true
console.log("O número 7 é par?", ehPar(7)); // false
console.log("Dobrar valores [1, 2, 3]:", dobraValores([1, 2, 3])); // [2, 4, 6]
console.log("Número de caracteres em 'Olá Mundo':", contaCaracteres("Olá Mundo")); // 9
console.log("Fatorial de 5:", fatorial(5)); // 120
