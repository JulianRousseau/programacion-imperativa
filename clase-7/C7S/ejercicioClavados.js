// estoy en una competencia de clavados,
// en dos arrays se muestran los 5 clavados que hacen los competidores
//en una competencia gana el que tiene el mejor promedio de clavado
// en otra gana el competidor con el mejor clavado

let clavadosParticipanteA = [5, 8, 4, 9, 5];
let clavadosParticipanteB = [8, 7, 8, 6, 8];

let puntajePorPromedio = (array) => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  promedio = suma / 5;
  return promedio;
};

let puntajePorMayor = (array) => {
  let resultado = 0;
  for (let i = 0; i < array.length; i++) {
    if (resultado < array[i]) {
      resultado = array[i];
    }
  }
  return resultado;
};

const competencia = (arrayA, arrayB, callback) => {
  let A = callback(arrayA);
  let B = callback(arrayB);

  let mayor = A > B ? "A" : "B";

  return console.log("el ganador es " + mayor);
};

competencia(clavadosParticipanteA, clavadosParticipanteB, puntajePorPromedio); // Gano el B
competencia(clavadosParticipanteA, clavadosParticipanteB, puntajePorMayor); // Gano el A
