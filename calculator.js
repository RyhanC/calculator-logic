let numero1 = Number(prompt("Digite um número:")); //Invés de console, optei pelo prompt para deixar tudo mais facil de visualizar
let operador = prompt("Digite um operador Logico:");
let numero2 = Number(prompt("Digite um número:"));

let resultado;
//Utilizei if-else para construir uma calculadora basica, segue a logica a baixo para entender como funciona.
if (operador === "+") {
    resultado = numero1+numero2; //Caso o usuario digite +, o codigo soma os numeros.
} else if (operador === "-") {
    resultado = numero1-numero2; //Se digitar -, ele subtrai os numeros.
} else if (operador === "*") {
    resultado = numero1*numero2; //Multiplica os numeros.
} else if (operador === "/") {
    resultado = numero1/numero2; //Divide os numeros.
}
else {
    alert("Esse operador é invalido"); //Bom, aqui o codigo me retorna "invalido" caso o usuario final digite algo que seja diferente dos operadores (+, - e etc.)
}

if (resultado !== undefined) {
    alert("Resultado: " + resultado);
}

// Codigo simples feito por mim (Ryhan Camilo)
// Treinando minha logica de programação