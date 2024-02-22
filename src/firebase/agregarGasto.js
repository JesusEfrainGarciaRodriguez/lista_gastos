import { db } from './firebaseConfig';
import { doc, addDoc } from 'firebase/firestore';

const agregarGasto = async ({ descripcion, cantidad, categoria, fecha, uidUsuario }) => {
    return await addDoc(doc(db, 'gastos'), {
        descripcion: descripcion,
        cantidad: Number(cantidad),
        categoria: categoria,
        fecha: fecha,
        uidUsuario: uidUsuario
    });
}

export default agregarGasto;