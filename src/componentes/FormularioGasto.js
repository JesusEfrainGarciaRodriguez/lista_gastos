import React, { useState } from 'react';

// Elementos
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from '../elementos/ElementosDeFormulario';
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import Boton from '../elementos/Boton';

// Img
import { ReactComponent as IconoPlus } from '../img/plus.svg';

// firebase
import { useAuth } from '../contextos/AuthContext';
import agregarGasto from '../firebase/agregarGasto';

// date-fns
import getUnixTime from 'date-fns/getUnixTime';
import fromUnixTime from 'date-fns/fromUnixTime';

const FormularioGasto = () => {
    const [inputDescripcion, setInputDescripcion] = useState('');
    const [inputCantidad, setInputCantidad] = useState('');
    const [categoria, setCategoria] = useState('hogar');
    const [fecha, setFecha] = useState(new Date());
    const { usuario } = useAuth();

    const HandleChange = (e) => {
        e.preventDefault();

        if( e.target.name === 'descripcion' ){
            setInputDescripcion(e.target.value);
        }
        else if( e.target.name === 'cantidad' ) {
            setInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        agregarGasto({
            descripcion: inputDescripcion,
            // Parse para tener 2 decimales
            cantidad: parseFloat(inputCantidad).toFixed(2),
            categoria: categoria,
            // Transformar fecha a formato unix
            fecha: getUnixTime(fecha),
            uidUsuario: usuario.uid
        });
    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias 
                    categoria={categoria}
                    setCategoria={setCategoria}
                />
                <DatePicker 
                    fecha={fecha} 
                    setFecha={setFecha}
                />
            </ContenedorFiltros>

            <div>
                <Input 
                    type="text" 
                    name="descripcion"
                    id="descripcion"
                    placeholder="Descripción"
                    value={inputDescripcion}
                    onChange={HandleChange}
                />
                <InputGrande 
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    placeholder="$0.00"
                    value={inputCantidad}
                    onChange={HandleChange}
                />
            </div>
            <ContenedorBoton>
                <Boton as="button" type="submit" primario conIcono>
                    Agregar Gasto
                    <IconoPlus />
                </Boton>
            </ContenedorBoton>
        </Formulario>
    );
}
 
export default FormularioGasto;