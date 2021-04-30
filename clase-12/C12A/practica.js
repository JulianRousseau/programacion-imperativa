let notas = [1,2,3,4,5,6,7,8,9,10]

// let notasPor10 = notas.map(function(num){
//     return num * 10
// })

// console.log(notasPor10)

// let aprobados = notas.filter(function(num){
//     return num >= 7
// })

// console.log(aprobados)

// let sumaNotas = notas.reduce(function (estado,num){
//     return estado + num
// })

// console.log(sumaNotas)

// notas.forEach(function(valor,index){
//     console.log(`en la posicion ${++index} tengo el valor ${valor}`) 
// })

// let unaParte = notas.slice(2,7)
// console.log(unaParte)

// notas.splice(4,4,5,6,7,8) //indice donde comenzara el cambio, cantidad de elementos a eliminar, a partir de ahi los que vamos a agregar
// console.log(notas) //en este caso lo modifico pero queda igual que antes

// let desordenado = [7,3,4,9,8,6,5,2,1,10]
// console.log(desordenado.sort())

// let variosNiveles = [1,2,3,[4],[5,6],[7,[8,9,10]]]
// console.log(variosNiveles.flat())
// console.log(variosNiveles.flat(2))

// let incluyeElElemento = notas.includes(7,0)
// console.log(incluyeElElemento)

let criptos = [
    {nombre: "Bitcoin", simbolo: "BTC"},
    {nombre: "Ethereum", simbolo: "ETH"},
    {nombre: "Cardano", simbolo: "ADA"}
]

let res = criptos.find(e => e.nombre == "Bitcoin")

console.log(res)




