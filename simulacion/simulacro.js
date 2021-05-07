console.log("##### SIMULACRO #####")

const fs = require('fs')

const departamentosJSON = fs.readFileSync(__dirname + '/departamentos.json', 'utf-8') //dirname es para que encuentre el archivo sin porblemas

const departamentosParse = JSON.parse(departamentosJSON)

let inmobiliaria = {
    departamentos: departamentosParse,
    departamentosDisponibles: function () {
        return this.departamentos.filter(depto => depto.disponible)
    },
    listarDepartamentos: function (arrDeptos) {
        arrDeptos.forEach(depto => {
            console.log(`id: ${depto.id}\nprecio: ${depto.precioAlquiler}\ndisponibilidad: ${depto.disponible ? "Disponible" : "Alquilado"}\n`)
        });
    },
    buscarPorId: function (id) {
        return this.departamentos.find(depto => depto.id === id)
    },
    buscarPorPrecio: function (precio) {
        let disponibles = this.departamentosDisponibles
        let resultado = disponibles.filter(depto => depto.precioAlquiler <= precio)
        return resultado
    },
    ordenarPorPrecio: function () {
        return this.departamentos.sort((prev, next) => prev.precioAlquiler - next.precioAlquiler)
    },
    precioConImpuesto: function (impuesto) {
        return this.departamentos.map(depto => depto.precioAlquiler += (depto.precioAlquiler * impuesto) / 100)
    },
    alquilarDepartamento: function (id) {
        if (this.buscarPorId(id).disponible === false) {
            console.log("Perdon, ya esta alquilado")
        } else {
            this.buscarPorId(id).disponible = false
            console.log("Felicidades, lo alquilaste")
        }
    },
    ingresoMensual: function () {
        let alquilados = this.departamentos.filter(depto => depto.disponible === false)
        // alquilados.forEach(depto => suma += depto.precioAlquiler)
        return "suma de alquileres: " + alquilados.reduce( (acum, departamento) => acum += departamento.precioAlquiler, 0)
    }, 
    comentar: function (id,comentario,puntuacion) {
        let deptoComentar = this.buscarPorId(id)
        let comentarioCliente = {
            comentario,
            puntuacion,
        }
        if(deptoComentar){
            console.log("Comentario Exitoso")
            deptoComentar.comentarios.push(comentarioCliente)
        } else {
            console.log("No se encuentra coincidencia")
        }
    },
    preferenciasCliente: function (cantidadHabitacion,mascotas,cantidadPersonas,precioAlquiler) {
        let disponibles = this.departamentosDisponibles()
        let deptosPosibles = disponibles.filter( depto => 
            depto.cantidadHabitacion === cantidadHabitacion 
            && depto.aceptaMascotas === mascotas
            && depto.cantidadPersonas >= cantidadPersonas
            && depto.precioAlquiler <= precioAlquiler
        )
        return deptosPosibles
    }

}

// console.log("***** departamentosDisponibles *****")
// console.log(inmobiliaria.departamentosDisponibles())
// console.log();

// console.log("***** listarDepartamentos *****")
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentos)
// console.log();

// console.log("***** buscarPorId *****")
// console.log(inmobiliaria.buscarPorId(4)) 
// console.log();

// console.log("***** buscarPorPrecio *****")
// console.log(inmobiliaria.buscarPorPrecio(2000))
// console.log();

// console.log("***** ordenarPorPrecio *****")
// console.log(inmobiliaria.ordenarPorPrecio())
// console.log();

// console.log("***** precioConImpuesto *****")
// console.log(inmobiliaria.precioConImpuesto(10))
// console.log();

// console.log("***** alquilarDepartamento *****")
// inmobiliaria.alquilarDepartamento(1)
// console.log(inmobiliaria.buscarPorId(1))
// console.log();

// console.log("***** ingresoMensual *****")
// console.log(inmobiliaria.ingresoMensual())
// console.log();

// console.log("***** comentar *****")
// inmobiliaria.comentar(1,"barbaro",5)
// console.log(inmobiliaria.buscarPorId(1))
// console.log();

// console.log("***** preferenciasCliente *****")
// console.log(inmobiliaria.preferenciasCliente(2,true,2,12000))

