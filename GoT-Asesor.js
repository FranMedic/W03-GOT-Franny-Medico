import Personajes from "./GoT.js";

class Asesor extends Personajes {
  personajeAsesora;

  constructor(nombre, familia, edad, estado, personajeAsesora) {
    super(nombre, familia, edad, estado);
    this.personajeAsesora = personajeAsesora;
  }
  comunicarseLuchador() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
