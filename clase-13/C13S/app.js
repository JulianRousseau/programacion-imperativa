let fs = require('fs')

let claseJSON = fs.readFileSync('clase.json', 'utf-8')

// console.log(claseJSON)

let claseParse = JSON.parse(claseJSON)

// console.log(claseParse)  

// for (let i = 0; i < claseParse.length; i++) {
//     const clase = claseParse[i];
//     console.log(clase.titulo)
// }

// let filtrarEstado = claseParse.filter(function(clase){
//     return clase.estado === 'terminada'
// })

function filtrar(estado, claseParse) {
    let resultado = []
    for (let i = 0; i < claseParse.length; i++) {
        const clase = claseParse[i];
        if (clase.estado === estado) {
            resultado.push(clase)
        }
    }
    return resultado
}

function filtrarDos(estado, claseParse) {
    return claseParse.filter(function (clase) {
        return clase.estado === estado
    })
}


// console.log(filtrarDos('terminada',claseParse))
// console.log(filtrarDos('repasar',claseParse))

let filtrarTres = (estado, claseParse) => claseParse.filter(clase => clase.estado === estado)

// console.log(filtrarTres('terminada', claseParse))
// console.log(filtrarTres('repasar', claseParse))

let guardarPorEstado = (estado, claseParse) => {
    fs.writeFileSync(`clases_${estado}.json`, JSON.stringify(claseParse.filter(clase => clase.estado === estado)))
}
guardarPorEstado('repasar', claseParse)
guardarPorEstado('terminada', claseParse)

// fs.writeFileSync('clases_terminadas.json', JSON.stringify(terminadas))