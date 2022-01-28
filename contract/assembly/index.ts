import { ContractPromiseBatch, PersistentVector, u128 } from "near-sdk-as";
import Solicitud from "./models/Solicitud";
import Empleado from "./models/Empleado";
import { ONE_NEAR} from "./utils";

const listaSolicitudes = new PersistentVector<Solicitud>("S");
const Nomina = new PersistentVector<Empleado>("N");

export function crearSolicitud(
  titulo: string,
  descripcion: string,
): string {
  assert(titulo.length > 0, "El titulo no puede estar vacio.");
  assert(descripcion.length > 0, "La descripcion no puede estar vacia.");  
  let montototal = 0

  for (let i = 0; i < Nomina.length; i++) {
    montototal += Nomina[i].sueldo;
  }
  const nuevaSolicitud = new Solicitud(
    listaSolicitudes.length,
    titulo,
    descripcion,
    montototal
  );
  listaSolicitudes.push(nuevaSolicitud);
  return 'Solicitud agregada con exito.'
}

export function crearEmpleado(
  nombre: string,
  nearid: string,
  sueldo: i32,
): string {
  assert(nombre.length > 0, "El titulo no puede estar vacio.");
  assert(nearid.length > 0, "El near id no puede estar vacio.");
  assert(sueldo > 1, "El monto debe ser mayor a 0");

  const nuevoEmpleado = new Empleado(
    Nomina.length,
    nombre,
    nearid,
    sueldo,
  );
  Nomina.push(nuevoEmpleado);
  return 'El nuevo empleado se agrego a la nomina.'
}

export function verNomina(): Empleado[] {
  const nomina: Empleado[] = new Array<Empleado>(Nomina.length);
  for (let i = 0; i < Nomina.length; i++) {
    nomina[i] = Nomina[i];
  }
  return nomina;
}

export function listarSolicitudes(): Solicitud[] {
  const listado: Solicitud[] = new Array<Solicitud>(listaSolicitudes.length);
  for (let i = 0; i < listaSolicitudes.length; i++) {
    listado[i] = listaSolicitudes[i];
  }
  return listado;
}

export function eliminarSolicitud(id: i32): string {
  if (listaSolicitudes[id]) {
    listaSolicitudes.swap_remove(id);
    return "Solicitud eliminada";
  }else{
    return "La solicitud no existe";
  }
}

export function eliminarEmpleado(id: i32): string {
  if (!Nomina[id]) {
    return "El empleado no existe";
  }
  Nomina.swap_remove(id);
  return "Empleado Eliminado";
}

export function RealizarPago(
  id: i32,
  ): string {
  if (!listaSolicitudes[id]) return "Esta solicitud no existe";
  let solicitud  = listaSolicitudes[id]
  if (solicitud.status == true){
    for (let i: i32 = 0; i < Nomina.length; i++) {
      var montoTransferencia = u128.mul(ONE_NEAR, u128.from(Nomina[i].sueldo))
      ContractPromiseBatch.create(Nomina[i].nearid).transfer(montoTransferencia)
    }
    solicitud.status = false
    listaSolicitudes.replace(<i32>id, solicitud)
    return "Se ha realizado el pago"
  }else{
    return "Esta solicitud ya ha sido cancelada"
  }
}