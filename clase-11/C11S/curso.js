const {estudiantes,Alumno} = require("./modulos/alumno");

/*
let a1 = new Alumno("Alumno 1", 0, 10, 10, 10, 10, 10);//true
let a2 = new Alumno("Alumno 2", 0, 5, 5, 5, 5, 5);//false
let a3 = new Alumno("Alumno 3", 2, 10, 10, 10, 10, 10);//true
let a4 = new Alumno("Alumno 4", 2, 7, 7, 7, 7, 7);//false
let a5 = new Alumno("Alumno 5", 3, 10, 10, 10, 10, 10);//false
let a6 = new Alumno("Alumno 6", 3, 1, 1, 1, 1, 1);//false
[a1, a2, a3, a4, a5, a6]
*/

let curso = {
    nombreCurso: "Programacion Imperativa",
    notaAprobacion: 6,
    faltasMaximas: 2,
    listaEstudiantes: estudiantes,
    agregarAlumno: function (nuevoAlumno) {
        this.listaEstudiantes.push(nuevoAlumno);
    },
    aprobado: function (alumno) {
        return alumno.promedio() > this.notaAprobacion
            ? alumno.cantidadFaltas < this.faltasMaximas
                ? true
                : alumno.cantidadFaltas == this.faltasMaximas && alumno.promedio() > (this.notaAprobacion * 1.1)
                    ? true
                    : false
            : false;
    },
    recorrerLista: function () {
        let resultados = []
        for (let i = 0; i < this.listaEstudiantes.length; i++) {
            resultados.push(this.aprobado(this.listaEstudiantes[i]))
        }
        return resultados
    }

};

console.log(curso.recorrerLista())
