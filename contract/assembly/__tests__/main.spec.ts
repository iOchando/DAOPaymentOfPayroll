import * as contrato from '../index'

describe("PRUEBAS UNITARIAS DEL CONTRATO", () => {
    it("Debe crear un empleado sin errores.",() => {
        expect(() => {
            contrato.crearEmpleado("Empleado", "empleado.testnet",50)
        }).not.toThrow()
    })
    it("Dara error si se intenta eliminar un empleado al mandarle una id invalida.",() => {
        expect(() => {
            contrato.eliminarEmpleado(123456)
        }).toThrow()
    })
    it("Dara error si se intenta hacer un pago a una solicitud que no existe",() => {
        expect(() => {
            contrato.RealizarPago(123456)
        }).toThrow()
    })
    it("Retornara la lista de solicitudes.",() => {
        expect(() => {
            const lista = contrato.listarSolicitudes()
            if(!lista) throw new Error()
        }).not.toThrow()
    })
    it("Debe crear una Solicitud sin errores.",() => {
      expect(() => {
          contrato.crearSolicitud("Proyecto1", "DescripcionProyecto")
      }).not.toThrow()
  })
  })