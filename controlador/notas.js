import Servicio from "../servicio/notas.js";

class Controlador {
    constructor() {
        this.servicio = new Servicio();
    }

    obtenerNotas = async (req, res) => {
        try {
            const notas = await this.servicio.obtenerNotas();

            res.json(notas);
        } catch (error) {
            console.log(
                "Error al obtener notas en el controlador: ",
                error.message
            );
        }
    };

    guardarNota = async (req, res) => {
        try {
            const nota = req.body;
            const notaGuardada = await this.servicio.guardarNota(nota);

            res.json(notaGuardada);
        } catch {
            console.log(
                "Error al guardar nota en el controlador: ",
                error.message
            );
        }
    };

    obtenerPromedio = async (req, res) => {
        try {
            const promedio = await this.servicio.obtenerPromedio();
            res.json(promedio);
        } catch (error) {
            console.log(
                "Error al obtener el promedio en el controlador",
                error.message
            );
        }
    };

    obtenerMinMax = async (req, res) => {
        try {
            const minmax = await this.servicio.obtenerMinMax();

            res.json(minmax);
        } catch (error) {
            console.log(
                "Error al obtener el min/max en el controlador",
                error.message
            );
        }
    };

    obtenerCantidad = async (req, res) => {
        try {
            const cantidad = await this.servicio.obtenerCantidad();

            res.json(cantidad);
        } catch (error) {
            console.log(
                "Error al obtener la cantidad en el controlador",
                error.message
            );
        }
    };
}

export default Controlador;
