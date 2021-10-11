import Personajes from "./GoT.js";

class Luchador extends Personajes {
  arma;
  destreza;
  constructor(nombre, familia, edad, estado, arma, destreza) {
    super(nombre, familia, edad, estado);
    this.arma = arma;
    this.destreza = destreza;
  }
  comunicarseLuchador() {
    return "Primero pego y luego pregunto";
  }
}
