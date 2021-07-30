import { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { useAuth } from '../contextos/AuthContext';

const useObtenerGastos = () => {
    const { usuario } = useAuth();
    const [gastos, setGastos] = useState([]);

    useEffect(() => {
        const unsuscribe = db.collection('gastos')
        .where('uidUsuario', '==', usuario.uid)
        .orderBy('fecha', 'desc')
        .limit(10)
        .onSnapshot((snapshot) => {
            // Regresar gastos en un arreglo y con su id
            setGastos(snapshot.docs.map((gasto) => {
                return {...gasto.data(), id: gasto.id};
            }));
        });

        // Desmontar componente
        return unsuscribe;
    }, [usuario]);

    return gastos;
}
 
export default useObtenerGastos;