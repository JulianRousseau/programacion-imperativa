let alumno = {
  nombre: "julian",
  cantidadFaltas: 0,
  notas: [10, 10, 10, 10, 9],
  promedio: function () {
    let suma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      suma += this.notas[i];
    }
    return suma;
  },
  faltar: function () {
    this.cantidadFaltas++;
  },
};

function Alumno(nombre, cantidadFaltas, notas) {
  (this.nombre = nombre),
    (this.cantidadFaltas = cantidadFaltas),
    (this.notas = notas),
    (this.promedio = function () {
      let resultado = 0;
      for (let i = 0; i < this.notas.length; i++) {
        resultado += this.notas[i];
      }
      return resultado / this.notas.length;
    }),
    (this.faltar = function () {
      this.cantidadFaltas++;
    });
}

module.exports = Alumno
