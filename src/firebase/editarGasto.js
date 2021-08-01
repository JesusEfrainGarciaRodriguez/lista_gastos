import { db } from "./firebaseConfig"

const editarGasto = ({ id, descripcion, cantidad, categoria, fecha }) => {
    return db.collection('gastos').doc(id).update({
        descripcion: descripcion,
        cantidad: Number(cantidad),
        categoria: categoria,
        fecha: fecha,
    });
}

export default editarGasto;