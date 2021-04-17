let multiplicacion = (a, b) => console.log(a * b); //si tenemos solo una sentencia y un solo resultado no hacen falta {}
multiplicacion(2, 5);

let holaNombre = (nombre) => console.log("hola " + nombre); //si tenemos solo un parametro no hace falta ()
holaNombre("julian");

let arrowNormal = (n, a, e) => {
  console.log("esto seria una arrow normal");
  console.log(`${n} ${a} ${e}`);
  return n
};
arrowNormal("julian", "rousseau", "23");

let suma = (a,b) => a+b
let resta = (a,b) => a-b
let divicion = (a,b) => a/b

function callbacksCalculadora(a,b,operacion) {
    console.log(operacion(a,b))
}

callbacksCalculadora(4,4,resta)

function agregarHttp(url) {
    url = "http://" + url
    return url
}

let urls = ["www.google.com","www.yahoo.com","www.julian.com"]

function procesar(arreglo,agregarHttp){
    for(let i=0;i<arreglo.length; i++){
        arreglo[i]=agregarHttp(arreglo[i])
    }
    return arreglo
}
console.log(procesar(urls,agregarHttp))
