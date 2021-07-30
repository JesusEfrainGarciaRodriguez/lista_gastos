import { db } from './firebaseConfig';

const agregarGasto = ({ descripcion, cantidad, categoria, fecha, uidUsuario }) => {
    return db.collection('gastos').add({
        descripcion: descripcion,
        cantidad: cantidad,
        categoria: categoria,
        fecha: fecha,
        uidUsuario: uidUsuario
    });
}

export default agregarGasto;