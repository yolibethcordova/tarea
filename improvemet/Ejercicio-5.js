console.log("Ejercicio-5")

//* 1. Escriba un comando que imprima todas las personas de la lista //*
let nombres = ["María", "Dani", "Luis", "Juan", "Camila"];
console.log(nombres);

//* 2. Escriba el comando para eliminar "Dani" de la matriz. //*
nombres.splice(nombres.indexOf("Dani"), 1);
console.log(nombres); //* ["María", "Luis", "Juan", "Camila"] //*

//*  3. Escriba el comando para eliminar "Juan" de la matriz. //*
nombres.splice(nombres.indexOf("Juan"), 1);
console.log(nombres); // ["María", "Luis", "Camila"]

//* 4. Escribe el comando para mover "Luis" al frente del arreglo. //*
nombres.splice(nombres.indexOf("Luis"), 1);  //* Eliminar "Luis" de su posición actual //*
nombres.unshift("Luis"); //* Agregar "Luis" al inicio del arreglo //*
console.log(nombres); //* ["Luis", "María", "Camila"] //*

//*  5. Escriba el comando para agregar su nombre al final de la matriz. //*
nombres.push("Yolibeth");  //* Yolibeth //*
console.log(nombres);  //* ["Luis", "María", "Camila", "Yolibeth"] //*

//* 6. Usando un bucle, repita esta matriz y después de console.log "Maria", salga del bucle. (pausa de uso) //*
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
  if (nombres[i] === "María") {
      break;
  }
}

//* 7. Escribe el comando que da el indexOf donde se encuentra "Maria". //*
let indexMaria = nombres.indexOf("María");
console.log(indexMaria); //* Índice de "María" en la matriz //*

//* Al final del ejercicio, debería haber 4 personas en la formación. //*
console.log(nombres); //* ["Luis", "María", "Camila", "Yolibeth" //*