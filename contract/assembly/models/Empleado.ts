@nearBindgen
class Empleado {
  public id: number;
  public nombre: string;
  public nearid: string;
  public sueldo: i32;

  constructor(
    id: number,
    nombre: string,
    nearid: string,
    sueldo: i32,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.nearid = nearid;
    this.sueldo = sueldo;
  }
}
export default Empleado;
