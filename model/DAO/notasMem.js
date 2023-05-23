class ModelMem {
    constructor() {
        this.notas = [
            {
                nota: 10,
            },
            {
                nota: 7,
            },
            {
                nota: 6,
            },
        ];
    }

    obtenerNotas = async () => {
        try {
            return await Promise.resolve(this.notas);
        } catch (error) {
            console.log("Error al obtener notas en el modelo: ", error.message);
            return await Promise.resolve([]);
        }
    };

    guardarNota = async (nota) => {
        try {
            this.notas.push(nota);
            return await Promise.resolve(nota);
        } catch (error) {
            console.log("Error al guardar nota en el modelo: ", error.message);
            return await Promise.resolve({});
        }
    };
}

export default ModelMem;
