//Creemos un objeto alumno que tiene como atributos,
//nombre (string) cantidad de faltas (number) y notas (array numeros),
// crearle un constructor e importar esto como el mÃ³dulo alumno.

function Estudiante(nombre, cantFaltas, notas) {
    this.nombre = nombre;
    this.cantidadFaltas = cantFaltas;
    this.notas = notas;
    (this.promedio = function () {
        let resultado = 0;
        for (let i = 0; i < this.notas.length; i++) {
            resultado += this.notas[i];
        }
        return resultado / this.notas.length;
    });
    (this.faltar = function () {
        this.cantidadFaltas++;
    });
}

let estudiantes = [
    new Estudiante("leandro ezequiel", 5, [7, 6, 2, 3, 4]),
    new Estudiante("Zoe Sobol", 3, [4, 10, 5, 8, 4]),
    new Estudiante("Nicolas Lopez", 2, [8, 9, 4, 7, 1]),
    new Estudiante("Nayla Saez", 1, [9, 5, 6, 5, 10]),
    new Estudiante("Julieta Alfie", 7, [2, 8, 5, 8, 8]),
];

// let leandro = new Estudiante("leandro ezequiel", 5, [7,6,2,3,4])
// let zoe = new Estudiante("Zoe Sobol", 3, [4,10,5,8,4])
// let nicolas = new Estudiante("Nicolas Lopez", 2, [8,9,4,7,1])
// let nayla = new Estudiante("Nayla Saez", 1, [9,5,6,5,10])
// let julieta = new Estudiante("Julieta Alfie", 7, [2,8,5,8,8])

module.exports = estudiantes;
