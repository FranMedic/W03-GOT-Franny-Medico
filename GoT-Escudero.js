import Personajes from "./GoT.js";

class Escudero extends Personajes {
  personajeSirve;
  pelota;

  constructor(nombre, familia, edad, estado, personajeSirve, pelota) {
    super(nombre, familia, edad, estado);
    this.personajeSirve = personajeSirve;
    this.pelota = pelota;
  }
  comunicarseLuchador() {
    return "Soy un loser";
  }
}
