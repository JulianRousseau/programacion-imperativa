//la primera letra con mayuscula es para identificar facilmente que es una funcion constructora
function Curso(cantAlumnos,docentes,horarios) {
    this.cantAlumnos = cantAlumnos
    this.docentes = docentes
    this.horarios = horarios
}

let c1=new Curso(50,2,"11am")

console.log(c1)
