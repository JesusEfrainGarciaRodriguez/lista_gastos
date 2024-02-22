import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router";

const useObtenerGasto = (id) => {
    const navigate = useNavigate();
    const [gasto, setGasto] = useState('');

    useEffect(() => {
        db.collection('gastos').doc(id).get()
        .then((doc) => {
            if(doc.exists) {
                setGasto(doc);
            }
            else {
                navigate('/lista');
            }
        })
    }, [navigate, id])

    return [gasto];
}
 
export default useObtenerGasto;