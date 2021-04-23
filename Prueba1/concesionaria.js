let autos = require('./autos')
// let Persona = require('./persona')
// let p1 = new Persona("Juan",20000,100000)

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].patente == patente) {
                return this.autos[i]
            }
        }
        return null
    },
    venderAuto: function (patente) {
        return this.buscarAuto(patente).vendido = true
    },
    autosParaLaVenta: function () {
        let autosEnVenta = []
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].vendido == false) {
                autosEnVenta.push(autos[i])
            }
        }
        return autosEnVenta
    },
    autosNuevos: function () {
        let autosEnVenta = this.autosParaLaVenta()
        let autosEnVentaNuevos = []
        for (let i = 0; i < autosEnVenta.length; i++) {
            if (autosEnVenta[i].km < 100) {
                autosEnVentaNuevos.push(autosEnVenta[i])
            }
        }
        return autosEnVentaNuevos
    },
    listaDeVentas: function () {
        let listaPrecioVentas = []
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].vendido == true) {
                listaPrecioVentas.push(autos[i].precio)
            }
        }
        return listaPrecioVentas
    },
    totalDeVentas: function () {
        let listaPrecioVentas = this.listaDeVentas()
        let sumatoria = 0
        for (let i = 0; i < listaPrecioVentas.length; i++) {
            sumatoria += listaPrecioVentas[i]
        }
        return sumatoria
    },
    puedeComprar: function (auto, persona) {
        let resultado = false
        let cuotaDelAuto = auto.precio / auto.cuotas
        if (auto.precio <= persona.capacidadDePagoTotal) {
            if (cuotaDelAuto <= persona.capacidadDePagoEnCuotas) {
                return resultado = true
            }
        }
        return resultado
    },
    autosQuePuedeComprar: function (persona) {
        let listaDeAutosPosibles = []
        let autosParaLaVenta = this.autosParaLaVenta()
        for (let i = 0; i < autosParaLaVenta.length; i++) {
            if (this.puedeComprar(autosParaLaVenta[i], persona) == true) {
                listaDeAutosPosibles.push(autosParaLaVenta[i])
            }
        }
        return listaDeAutosPosibles
    }
}

