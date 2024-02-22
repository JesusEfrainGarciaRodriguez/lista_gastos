import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router";
import { doc, getDoc } from "firebase/firestore";

const useObtenerGasto = (id) => {
    const navigate = useNavigate();
    const [gasto, setGasto] = useState('');

    useEffect(() => {
        const obtenerGasto = async () => {
            const documento = await getDoc(doc(db, 'gastos', id));

            if(documento.exists) {
                setGasto(documento);
            }
            else {
                navigate('/lista');
            }
        }
        obtenerGasto();
    }, [navigate, id])

    return [gasto];
}
 
export default useObtenerGasto;