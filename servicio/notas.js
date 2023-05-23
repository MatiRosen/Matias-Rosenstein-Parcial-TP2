import ModelFactory from "../model/DAO/notasFactory.js";
import config from "../config.js";

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA);
    }

    obtenerNotas = async () => {
        const notasObtenidas = await this.model.obtenerNotas();
       
        const arrayNotas = notasObtenidas.map((nota) => nota.nota);
        return { notas: arrayNotas };
    };

    guardarNota = async (nota) => {
        nota.nota = Number(nota.nota); // Debido a que al ingresar una nota desde el form, el dato se recibe como string, y se debe convertir a number.
        const notaGuardada = await this.model.guardarNota(nota);
        return notaGuardada;
    };

    obtenerPromedio = async () => {
        const notasObtenidas = await this.model.obtenerNotas();
        const suma = notasObtenidas.map((nota) => nota.nota).reduce((acumulador, nota) => acumulador + nota, 0);

        const promedio = Number((suma / notasObtenidas.length).toFixed(2)); // toFixed devuelve string, lo convierte a number.
        return { promedio };
    }

    obtenerMinMax = async () => {
        const notasObtenidas = await this.model.obtenerNotas();
        const min = notasObtenidas.map((nota) => nota.nota).sort((a,b) => a - b)[0]
        const max = notasObtenidas.map((nota) => nota.nota).sort((a,b) => b - a)[0]

        return { min, max };
    }

    obtenerCantidad = async () => {
        const notasObtenidas = await this.model.obtenerNotas();

        return { cantidad: notasObtenidas.length}
    }
}

export default Servicio;
