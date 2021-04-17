console.log("Julian Rousseau julianrousseau31@gmail.com")

console.log("\n###### 1 => Par o Impar ######\n");
function par_o_impar(num) {
  let resultado = num % 2 == 0 ? "es par" : "es impar";
  return console.log(resultado);
}
par_o_impar(10);
par_o_impar(15);

console.log("\n###### 2 => peaje ######\n");
function pagoPeaje(pago) {
  return console.log(pago == true ? "pago" : "no pago");
}
pagoPeaje(true);
pagoPeaje(false);

console.log("\n###### 3 => es el mismo? ######\n");
function esElMismo(num) {
  let azar = Math.floor(Math.random() * 10 + 1);
  return console.log(azar == num ? "es igual" : "es diferente");
}
esElMismo(1);

console.log("\n###### 4 => navidad? ######\n");
function esNavidad(dia, mes) {
  return console.log(dia == 25 && mes == 12 ? "navidad" : "dia normal");
}
esNavidad(11, 11);
esNavidad(11, 12);
esNavidad(25, 11);
esNavidad(25, 12);

console.log("\n###### 5 => dias en un mes ######\n");
function cuantosDias(mes) {
  let dias = 0;
  switch (mes) {
    case "enero":
      dias = 31;
      break;
    case "febrero":
      dias = 28;
      break;
    case "marzo":
      dias = 31;
      break;
    case "abril":
      dias = 30;
      break;
    case "mayo":
      dias = 31;
      break;
    case "junio":
      dias = 30;
      break;
    case "julio":
      dias = 31;
      break;
    case "agosto":
      dias = 31;
      break;
    case "septiembre":
      dias = 30;
      break;
    case "octubre":
      dias = 31;
      break;
    case "noviembre":
      dias = 30;
      break;
    case "diciembre":
      dias = 31;
      break;
  }
  return console.log(mes + " => " + dias);
}
cuantosDias("enero");
cuantosDias("febrero");
cuantosDias("marzo");
cuantosDias("abril");
cuantosDias("mayo");
cuantosDias("junio");
cuantosDias("julio");
cuantosDias("agosto");
cuantosDias("septiembre");
cuantosDias("octubre");
cuantosDias("noviembre");

console.log("\n###### 6 => notas ######\n");

function test(nota) {
  if (nota < 4) {
    return console.log("recursas");
  } else if (nota >= 4 && nota < 7) {
    return console.log("recuperatorio");
  } else if (nota >= 7) {
    return console.log("aprobo");
  }
}
test(1);
test(2);
test(3);
test(4);
test(5);
test(6);
test(7);
test(8);
test(9);
test(10);

console.log("\n###### 7 => paracaidas ######\n");
function abrirParacaidas(altura, velocidad) {
  return console.log(
    altura >= 2000 && altura <= 3000 && velocidad <= 1000
      ? "Puede abrir"
      : "No puede abrir"
  );
}
abrirParacaidas(1000, 1500);
abrirParacaidas(2500, 1500);
abrirParacaidas(1000, 500);
abrirParacaidas(2500, 500);

console.log("\n###### 8 => sandwich ######\n");
function precio(tomate, papa, huevo) {
  let valorFinal = 150;

  if (tomate) {
    valorFinal += 20;
  }
  if (papa) {
    valorFinal += 50;
  }
  if (huevo) {
    valorFinal += 60;
  }

  return console.log("el valor del sandwich es: " + valorFinal);
}

precio(false, false, false);
precio(false, false, true);
precio(false, true, false);
precio(true, false, false);
precio(false, true, true);
precio(true, true, false);
precio(true, false, true);
precio(true, true, true);

console.log("\n###### 9 => clima ######\n");
function queEstacion(mes) {
  let estacion = null;
  switch (mes) {
    case "enero":
      estacion = "Verano";
      break;
    case "febrero":
      estacion = "Verano";
      break;
    case "marzo":
      estacion = "Verano";
      break;
    case "abril":
      estacion = "Otoño";
      break;
    case "mayo":
      estacion = "Otoño";
      break;
    case "junio":
      estacion = "Otoño";
      break;
    case "julio":
      estacion = "Invierno";
      break;
    case "agosto":
      estacion = "Invierno";
      break;
    case "septiembre":
      estacion = "Invierno";
      break;
    case "octubre":
      estacion = "Primavera";
      break;
    case "noviembre":
      estacion = "Primavera";
      break;
    case "diciembre":
      estacion = "Verano";
      break;
  }
  return console.log(mes + " => " + estacion);
}
queEstacion("enero");
queEstacion("febrero");
queEstacion("marzo");
queEstacion("abril");
queEstacion("mayo");
queEstacion("junio");
queEstacion("julio");
queEstacion("agosto");
queEstacion("septiembre");
queEstacion("octubre");
queEstacion("noviembre");
queEstacion("diciembre");

console.log("\n###### Montaña Rusa V-2 ######\n");
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
