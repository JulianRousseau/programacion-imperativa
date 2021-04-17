console.log("###### Montaña Rusa ######");
let alturaMaxima = 200;
let alturaMinima = 120;
let alturaSinAcompañante = 140;

function puedeSubir(altura, vieneAcompañada) {
  let respuesta = false;
  if (altura > alturaMaxima || altura < alturaMinima) {
    respuesta = false;
  } else if (altura >= alturaSinAcompañante) {
    respuesta = true;
  } else if (altura < alturaSinAcompañante && vieneAcompañada === true) {
    respuesta = true;
  } else if (altura < alturaSinAcompañante && vieneAcompañada === false) {
    respuesta = false;
  }
  return "puede subir => " + respuesta;
}

console.log(puedeSubir(145, false)); //caso1
console.log(puedeSubir(145, true)); //caso2
console.log(puedeSubir(130, true)); //caso3
console.log(puedeSubir(130, false)); //caso4
console.log(puedeSubir(115, true)); //caso5
console.log(puedeSubir(115, false)); //caso6
console.log(puedeSubir(210, true)); //caso7
console.log(puedeSubir(210, false)); //caso8
