console.log("Ejercicio-2.js");


function duplicar_valores(matriz) {
//* Crear una nueva lista duplicando cada número de la matriz original //*
let nueva_matriz = matriz.map(numero => numero * 2);
//* Imprimir la nueva lista actualizada //*
console.log(nueva_matriz);
}

//* Ejemplo de uso //*
matriz = [1, 2, 4, 5];
duplicar_valores(matriz);
