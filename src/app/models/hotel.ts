export class Hotel {

constructor(_id = '', nombre = '', correo = '' , telefono = 52, fecha_llegada = '', fecha_salida = '' , habitaciones = '',
adultos = ' ', ninos = ' ') {
  this._id = _id;
  this.nombre = nombre;
  this.correo = correo;
  this.telefono = telefono;
  this.fecha_llegada = fecha_llegada;
  this.fecha_salida = fecha_llegada ;
  this.habitaciones = habitaciones;
  this.adultos = adultos;
  this.ninos = ninos;
}
  _id: String;
  nombre: String;
  correo: String;
  telefono: Number;
  fecha_llegada: String;
  fecha_salida: String;
  habitaciones: String;
  adultos: String;
  ninos: String;
}
