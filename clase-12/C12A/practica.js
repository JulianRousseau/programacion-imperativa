let notas = [1,2,3,4,5,6,7,8,9,10]

let notasPor10 = notas.map(function(num){
    return num * 10
})

console.log(notasPor10)

let aprobados = notas.filter(function(num){
    return num >= 7
})

console.log(aprobados)

let sumaNotas = notas.reduce(function (estado,num){
    return estado + num
})

console.log(sumaNotas)

notas.forEach(function(valor,index){
    console.log(`en la posicion ${++index} tengo el valor ${valor}`) 
})

