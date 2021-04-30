let fs = require('fs') // fs = File System

fs.writeFileSync('prueba.txt', 'Creando un texto')
fs.appendFileSync('prueba.txt', ' Agregando un texto al existente') 

let leerTexto = fs.readFileSync('prueba.txt',{encoding: 'utf-8'})

console.log(leerTexto)




