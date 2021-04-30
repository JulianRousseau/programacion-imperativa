// JSON
// # DIFERENCIAS DE JSON A OBJETO LITERAL 
// > Solo se pueden usar comillas dobles
// > Las claves van entre comillas 
// > No admite metodos, solo propiedades y valores
// > No podemos poner una coma en el ultimo elemento

let amigosArray = ['santi', 'lucas', 'mendez']
console.log(amigosArray)

let amigosArrayConvertidoJSON = JSON.stringify(amigosArray)
console.log(amigosArrayConvertidoJSON)

let JSONconvertidoAarray = JSON.parse(amigosArrayConvertidoJSON)
console.log(JSONconvertidoAarray)

let personasObjeto = { nombre: "juli", apellido: "rousseau", edad: 23 }
console.log(personasObjeto)

let personasObjetoConvertidoJSON = JSON.stringify(personasObjeto)
console.log(personasObjetoConvertidoJSON)

let JSONconvertidoApersona = JSON.parse(personasObjetoConvertidoJSON)
console.log(JSONconvertidoApersona)

