let fs = require('fs')
const superYo = require('./paqueton')
 
let a = fs.readFileSync(__dirname + "/text.txt","utf-8")
console.log(a)

let h = require("./paqueton")
console.log(h)