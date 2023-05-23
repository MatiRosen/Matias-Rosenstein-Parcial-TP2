import express from "express";
import Controlador from "../controlador/notas.js";

class Router {
    constructor() {
        this.router = express.Router();
        this.controlador = new Controlador();
    }

    start() {
        this.router.post("/ingreso", this.controlador.guardarNota);
        this.router.get("/listado", this.controlador.obtenerNotas);
        this.router.get("/promedio", this.controlador.obtenerPromedio);
        this.router.get("/minmax", this.controlador.obtenerMinMax);
        this.router.get("/cantidad", this.controlador.obtenerCantidad);

        return this.router;
    }
}

export default Router;
