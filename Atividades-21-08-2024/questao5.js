let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
console.log("Array após push:", numeros); // [10, 20, 30, 40, 50, 60]

let valorRemovido = numeros.pop();
console.log("Valor removido:", valorRemovido); // 60
console.log("Array após pop:", numeros); // [10, 20, 30, 40, 50]

numeros.splice(2, 1);
console.log("Array após splice:", numeros); // [10, 20, 40, 50]

numeros.sort((a, b) => b - a);
console.log("Array em ordem decrescente:", numeros); // [50, 40, 20, 10]
