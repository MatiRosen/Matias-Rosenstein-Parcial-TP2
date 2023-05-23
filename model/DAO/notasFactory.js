import ModelFile from "./notasFile.js";
import ModelMem from "./notasMem.js";

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case "MEM":
                console.log("**** Persistiendo en memoria ****");
                return new ModelMem();
            case "FILE":
                console.log("**** Persistiendo en File System ****");
                return new ModelFile();
            default:
                console.log("**** Persistiendo en Memoria (default) ****");
                return new ModelMem();
        }
    }
}

export default ModelFactory;
