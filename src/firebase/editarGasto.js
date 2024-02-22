import { db } from "./firebaseConfig";
import { doc, updateDoc } from 'firebase/firestore';

const editarGasto = async ({ id, descripcion, cantidad, categoria, fecha }) => {
    const documento = doc(db, 'gastos', id);
    return await updateDoc(documento, {
        descripcion: descripcion,
        cantidad: Number(cantidad),
        categoria: categoria,
        fecha: fecha,
    });
}

export default editarGasto;