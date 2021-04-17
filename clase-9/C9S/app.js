let cal = require("./modulosPropios")
let figlet = require('figlet')

console.log(cal.suma(2,2))
console.log(cal.resta(2,2))
console.log(cal.multiplicacion(2,2))
console.log(cal.divicion(2,2))


console.log(figlet.textSync("JR"))
console.log(figlet.textSync('Julian\nRousseau', {
    horizontalLayout: 'default',
    verticalLayout: 'full',
    width: 80,
    whitespaceBreak: true
}));
