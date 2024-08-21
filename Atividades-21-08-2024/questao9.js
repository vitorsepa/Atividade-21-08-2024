function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}

function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

const resultadoSoma = executaOperacao(5, 3, soma);
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoMultiplicacao = executaOperacao(5, 3, multiplicacao);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

function repetirOperacao(vezes, operacao) {
    for (let i = 1; i <= vezes; i++) {
        console.log(`Resultado da operação na iteração ${i}: ${operacao(i)}`);
    }
}

repetirOperacao(5, (num) => num * 2);
function contarOcorrencias(str, char) {
    let contador = 0;
    str.split('').forEach(c => {
        if (c === char) {
            contador++;
        }
    });
    return contador;
}

const ocorrencias = contarOcorrencias('banana', 'a');
console.log(`Número de ocorrências de 'a': ${ocorrencias}`);