console.log("Ejercicio-4")

let estudiante1Cursos = ['Matemáticas', 'Inglés', 'Programación'];
let estudiante2Cursos = ['Geografía', 'Español', 'Programación'];

//* Encontrar cursos comunes //*
let cursosComunes = estudiante1Cursos.filter(curso => estudiante2Cursos.includes(curso));

//* Imprimir los cursos comunes //*
if (cursosComunes.length > 0) {
    console.log("Cursos comunes:", cursosComunes.join(", "));
} 

// =============== pregunta de entrevista ===============

/*

 Dado el siguiente texto: "Ya vámonos"

 Mostrar la frase al revés: "sonomáv aY" 

*/

const phrase2 = "Ya vámonos";

let reversePhrase = "";

for(let i = phrase2.length - 1 ;  i >= 0 ; i-- ){

    reversePhrase = reversePhrase + phrase2.charAt(i);

}

console.log( reversePhrase );

console.log(  phrase2.split("").reverse().join("")   );