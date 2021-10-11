import Personajes from "./GoT.js";

class Rey extends Personajes {
  anosReinado;
  constructor(nombre, familia, edad, estado, anosReinado) {
    super(nombre, familia, edad, estado);
    this.anosReinado = anosReinado;
  }
  comunicarseRey() {
    return "Vais a morir todos";
  }
}
