console.log("Ejercicio")

function calcular_suma_y_producto(matriz) {
  //* Calcular la suma de los números en la matriz//*
  let suma = matriz.reduce((acumulador, numero) => acumulador + numero, 0);
  //* Calcular el producto de los números en la matriz //*
  let producto = matriz.reduce((acumulador, numero) => acumulador * numero, 1);

  //* Imprimir la suma y el producto //*
  console.log("La suma es " + suma + ".");
  console.log("El producto es " + producto + ".");
}

//* Ejemplo de uso //*
let matriz = [1, 2, 3, 4];
calcular_suma_y_producto(matriz);
