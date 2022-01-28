@nearBindgen
class Solicitud {
  public id: number;
  public titulo: string;
  public descripcion: string;
  public montototal: i32;
  public status: bool;

  constructor(
    id: number,
    titulo: string,
    descripcion: string,
    montototal: i32
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.montototal = montototal;
    this.status = true;
  }
}
export default Solicitud;