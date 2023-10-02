import mongoose from "mongoose";
const { Schema } = mongoose;

new Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  fecha_llegada: {
    type: Number,
    required: true,
  },
  fecha_salida: {
    type: Number,
    required: true,
  },
  habitaciones: {
    type: Number,
    required: true,
  },
  adultos: {
    type: Number,
    required: true,
  },
  niños: {
    type: Number,
    required: true,
  },
});
