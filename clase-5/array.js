let arreglo = [1, 2, 3, 4, "cinco", "seis"];

// Acceder a elementos específicos de un array.

console.log(arreglo[0]);
console.log(arreglo[4]);

//Modificar cada uno de sus elementos un array y Imprimirlos.

arreglo[0] = 21;
arreglo[1] = 42;
arreglo[2] = 33;
arreglo[3] = "ocho";
arreglo[4] = true;
arreglo[5] = "veinte";

console.log(arreglo);

//Agregar elementos a un array.

arreglo.push("siete");
arreglo.push("grupo 11");
arreglo.unshift("al principio");

//Extraer elementos de un array.
let ultimo = arreglo.pop();
let cero = arreglo.shift();

//Comparar elementos de un array con los elementos de otro.

function sonIguales(arregloA, arregloB, posicion){
    return arregloA[posicion] === arregloB[posicion] ? "son iguales" : "son diferentes";
}



//Crear un archivo arrays.js que contenga el código:
let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

//Comprobamos que todo funciona bien si solicitamos el 2° elemento del array y en la consola dice “totoro”.
console.log(films[1])

//En el mismo archivo nos piden que los nombres de las películas estén en MAYÚSCULAS usando .toUpperCase() para cada elemento. Asegurarnos que entregamos el array con todas las películas en mayúsculas.
films[0]=films[0].toUpperCase();
films[1]=films[1].toUpperCase();
films[2]=films[2].toUpperCase();
films[3]=films[3].toUpperCase();
films[4]=films[4].toUpperCase();
console.log(films);


//Mientras trabajabamos en el ejercicio 2, se descubrió que en el código también existe otro array, pero con películas animadas.
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function agregarPelis(films, cartoons) {
    films.push(cartoons[0]);
    films.push(cartoons[1]);
    films.push(cartoons[2]);
    films.push(cartoons[3]);
    //Uno de los desarrolladores advirtió que la última animación es en realidad un videojuego. Eliminar ese último elemento del array cartoons antes de pasarlos a films.
    //films.push(cartoons[4]);
}

agregarPelis(films,cartoons);
console.log(films);


//Finalmente, nos envían dos arrays con las calificaciones que hacen distintos usuarios del mundo de estas películas de la siguiente forma:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 
//Nos piden crear una función que compare las calificaciones y nos diga si son iguales o diferentes. 
//Nos confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10

function comparaCalif(scoresA,scoresB) {
    return console.log("pelicula 1 "+
        (scoresA[0]==scoresB[0])+ "\npelicula 2 "+
        (scoresA[1]==scoresB[1])+ "\npelicula 3 "+
        (scoresA[2]==scoresB[2])+ "\npelicula 4 "+
        (scoresA[3]==scoresB[3])+ "\npelicula 5 "+
        (scoresA[4]==scoresB[4])+ "\npelicula 6 "+
        (scoresA[5]==scoresB[5])+ "\npelicula 7 "+
        (scoresA[6]==scoresB[6])+ "\npelicula 8 "+
        (scoresA[7]==scoresB[7]))
}

comparaCalif(asiaScores,euroScores)
//CUANDO TERMINEMOS ACUERDENSE DE HACER UNA COPIA DEL ARCHIVO PARA CADA UNO