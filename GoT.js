class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "juego de trono";

  constructor(nombre, familia, edad, estado) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
  }
  comunicarse() {
    return "";
  }
  morir() {
    this.estado = "muerto";
    return;
  }
}

export default Personajes;
