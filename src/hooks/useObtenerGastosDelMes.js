import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import { useAuth } from '../contextos/AuthContext';
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";

const useObtenerGastosDelMes = () => {
    const { usuario } = useAuth();
    const [gastos, setGastos] = useState([]);

    useEffect(() => {
        // Obtener el inicio y fin del mes
        const inicioDeMes = getUnixTime(startOfMonth(new Date()));
        const finDeMes = getUnixTime(endOfMonth(new Date()));

        if(usuario) {
            // Obtiene los gastos del mes
            const consulta = query(
                collection(db, 'gastos'),
                orderBy('fecha', 'desc'),
                where('fecha', '>=', inicioDeMes),
                where('fecha', '<=', finDeMes),
                where('uidUsuario', '==', usuario.uid)
            );

            const unsuscribe = onSnapshot(consulta, (snapshot) => {
                setGastos(snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id};
                }));
            });

            // Use Effect tiene que retornar una funcion que se va a ejecutar cuando se desmonte el componente.
			// En este caso queremos que ejecute el unsuscribe a la coleccion de firestore.
            return unsuscribe;
        }
        
    }, [usuario]);

    return gastos;
}
 
export default useObtenerGastosDelMes;