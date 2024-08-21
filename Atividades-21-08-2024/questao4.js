//1.
let nulo = null;

//2.
console.log(nulo == undefined);
console.log(nulo === undefined);

//3. e 4.
let indefinido;
console.log(isNaN(indefinido));

//5.
let numStr2 = "123abc";
let num = Number(numStr2);
console.log(isNaN(num));
