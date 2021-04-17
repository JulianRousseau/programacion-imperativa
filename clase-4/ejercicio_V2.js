console.log("###### Montaña Rusa V-2 ######\n");
function puedeSubir_V2(altura, compania, penalizade) {
  let alturaMts = altura / 100;

  return (
    "\nBienvenido a JR park\n" +
    "Altura => " +
    alturaMts.toFixed(2) +
    " metros\n" +
    (compania ? "Estas acompañado\n" : "Estas solo\n") +
    (penalizade ? "Estas penalizade\n" : "No estas penalizade\n") +
    (((altura >= 140 && altura <= 200) ||
      (altura < 140 && altura >= 120 && compania)) &&
    !penalizade
      ? "Genial, podes pasar"
      : "Disculpa, no cumplis los requisitos")
  );
}

console.log(puedeSubir_V2(145, false, true)); //caso1
console.log(puedeSubir_V2(145, false, false)); //caso2 <== correcto

console.log(puedeSubir_V2(145, true, true)); //caso3
console.log(puedeSubir_V2(145, true, false)); //caso4 <== correcto

console.log(puedeSubir_V2(130, true, true)); //caso5
console.log(puedeSubir_V2(130, true, false)); //caso6 <== correcto

console.log(puedeSubir_V2(130, false, true)); //caso7
console.log(puedeSubir_V2(130, false, false)); //caso8

console.log(puedeSubir_V2(115, true, true)); //caso9
console.log(puedeSubir_V2(115, true, false)); //caso10

console.log(puedeSubir_V2(115, false, true)); //caso11
console.log(puedeSubir_V2(115, false, false)); //caso12

console.log(puedeSubir_V2(210, true, true)); //caso13
console.log(puedeSubir_V2(210, true, false)); //caso14

console.log(puedeSubir_V2(210, false, true)); //caso15
console.log(puedeSubir_V2(210, false, false)); //caso16
