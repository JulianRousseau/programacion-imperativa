console.log("###### (1) ######")
function calcularIndiceDeMasaCorporal(pesoKg, alturaMts) {
    let imc = pesoKg / (alturaMts * alturaMts)
    return imc
}
console.log(calcularIndiceDeMasaCorporal(70, 1.70))

console.log("\n###### (2) ######")
let suma = function (a, b) {
    return a + b
}
let resta = function (a, b) {
    return a - b;
}
let multiplicacion = function (a, b) {
    return a * b;
}
let divicion = function (a, b) {
    return a / b
}
console.log(suma(2, 2), resta(2, 2), multiplicacion(2, 2), divicion(2, 2),)

console.log("\n###### (3) ######")
let nombreJugador = "Neymar"
let golesJugador = 0
let precioEnDolares = 0

function hacerGol() {
    golesJugador++
    console.log("GOL!!!!!!!!!")
    precioEnDolares += 10000
}

hacerGol()
hacerGol()
hacerGol()
console.log("Goles: " + golesJugador + " y su precio en el mercado: " + precioEnDolares)

console.log("\n###### (4) ######")
function hattrick() {
    hacerGol()
    hacerGol()
    hacerGol()
    precioEnDolares+= precioEnDolares*=0.10
}
hattrick()
console.log("Goles: " + golesJugador + " y su precio en el mercado: " + precioEnDolares)

//Sergio si ves este mensaje perdon por no poder esperarte (recorde que despues de bases de datos tengo un compromiso), saludos