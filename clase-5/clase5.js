console.log("Julian Rousseau julianrousseau31@gmail.com")

console.log("\n###### 1 ######\n");

function invertir(arreglo) {
    let solucion = []
    solucion[0] = arreglo.pop()
    solucion[1] = arreglo.pop()
    solucion[2] = arreglo.pop()
    solucion[3] = arreglo.pop()
    return console.log(solucion)
}
let a1=[1,2,3,4]
invertir(a1)

console.log("\n###### 2 ######\n");

function extraerNumerosPares(arreglo) {
    let pares = []
    let impares = []
    arreglo[0] % 2 == 0 ? pares.push(arreglo[0]) : impares.push(arreglo[0])
    arreglo[1] % 2 == 0 ? pares.push(arreglo[1]) : impares.push(arreglo[1])
    arreglo[2] % 2 == 0 ? pares.push(arreglo[2]) : impares.push(arreglo[2])
    arreglo[3] % 2 == 0 ? pares.push(arreglo[3]) : impares.push(arreglo[3])
    return console.log("pares " + pares + "\nimpares " + impares)
}
let a2 = [1,2,3,4]
extraerNumerosPares(a2)

console.log("\n###### 3 ######\n");



console.log("\n###### 4 ######\n");
console.log("\n###### 5 ######\n");