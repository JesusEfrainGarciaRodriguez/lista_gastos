import React, { useContext, useEffect, useState } from 'react';
import useObtenerGastosDelMes from '../hooks/useObtenerGastosDelMes';

// Creación del contexto
const TotalGastadoContext = React.createContext();

// Hook para acceder al contexto
const useTotalDelMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    const gastos = useObtenerGastosDelMes();

    useEffect(() => {
        let acumulado = 0;
        gastos.forEach((gasto) => {
            acumulado += gasto.cantidad;
        });
        setTotal(acumulado);
    }, [gastos]);

    return(
        <TotalGastadoContext.Provider value={{total:total}}>
           {children} 
        </TotalGastadoContext.Provider>
    );
}

export { TotalGastadoProvider, useTotalDelMes }