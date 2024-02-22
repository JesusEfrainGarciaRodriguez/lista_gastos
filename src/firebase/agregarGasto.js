import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const agregarGasto = ({ descripcion, cantidad, categoria, fecha, uidUsuario }) => {
    return addDoc(collection(db, 'gastos'), {
        descripcion: descripcion,
        cantidad: Number(cantidad),
        categoria: categoria,
        fecha: fecha,
        uidUsuario: uidUsuario
    });
}

export default agregarGasto;