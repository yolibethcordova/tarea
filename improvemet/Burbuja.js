console.log("Burbuja");

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              //* Intercambiar arr[i] y arr[i + 1] //*
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
          }
      }
      //* Después de cada pasada, el elemento más grande se coloca al final n--; //*
  } while (swapped);
  return arr;
}

//* Ejemplo de uso //*
let array = [3, 6, 12, 5, 100, 1];
let sortedArray = bubbleSort(array);
console.log(sortedArray);  //* [1, 3, 5, 6, 12, 100] //*
