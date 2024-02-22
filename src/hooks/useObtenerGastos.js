import { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { useAuth } from '../contextos/AuthContext';
import { collection, onSnapshot, query, orderBy, where, limit, startAfter } from "firebase/firestore";

const useObtenerGastos = () => {
    const { usuario } = useAuth();
    const [gastos, setGastos] = useState([]);
    const [ultimoGasto, setUltimoGasto] = useState(null);
    const [hayMasPorCargar, setHayMasPorCargar] = useState(false);

    const obtenerMasGastos = () => {
        const consulta = query(
            collection(db, 'gastos'),
            where('uidUsuario', '==', usuario.uid),
            orderBy('fecha', 'desc'),
            limit(10),
            startAfter(ultimoGasto)
        );

        onSnapshot(consulta, (snapshot) => {
            // Comprobar si existen gastos
            if(snapshot.docs.length > 0){
                // Guardar lugar del ultimo gasto cargado
                setUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);

                // Agregar los nuevos gastos a los antiguos
                setGastos(gastos.concat(snapshot.docs.map((gasto) => {
                    return {...gasto.data(), id: gasto.id}
                })));
            }
            else {
                setHayMasPorCargar(false);
            }
        });
    }

    // Cargar los primeros gastos con limite de 10
    useEffect(() => {
        const consulta = query(
            collection(db, 'gastos'),
            where('uidUsuario', '==', usuario.uid),
            orderBy('fecha', 'desc'),
            limit(10)
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            // Comprobar si existen gastos
            if(snapshot.docs.length > 0){
                // Guardar lugar del ultimo gasto cargado
                setUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
                setHayMasPorCargar(true);
            } 
            else {
                setHayMasPorCargar(false);
            }
            // Regresar gastos en un arreglo y con su id
            setGastos(snapshot.docs.map((gasto) => {
                return {...gasto.data(), id: gasto.id};
            }));
        });

        // Desmontar componente
        return unsuscribe;
    }, [usuario]);

    return [gastos, obtenerMasGastos, hayMasPorCargar];
}
 
export default useObtenerGastos;