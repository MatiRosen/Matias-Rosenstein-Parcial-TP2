import fs from "fs";

class ModelFile {
    constructor() {
        this.nombreArchivo = "notas.json";
    }

    async leerArchivo() {
        return await fs.promises.readFile(this.nombreArchivo, "utf-8");
    }

    async escribirArchivo(notas) {
        await fs.promises.writeFile(
            this.nombreArchivo,
            JSON.stringify(notas, null, "\t")
        );
    }

    obtenerNotas = async () => {
        try {
            const notas = JSON.parse(await this.leerArchivo());
            return notas;
        } catch {
            return [];
        }
    };

    guardarNota = async (nota) => {
        let notas = [];
        try {
            notas = JSON.parse(await this.leerArchivo());
        } catch {}

        notas.push(nota);

        await this.escribirArchivo(notas);
        return nota;
    };
}

export default ModelFile;
