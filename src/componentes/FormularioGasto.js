import React, { useState } from 'react';
import Boton from '../elementos/Boton';

// Elementos
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from '../elementos/ElementosDeFormulario';

// Img
import { ReactComponent as IconoPlus } from '../img/plus.svg';

const FormularioGasto = () => {
    const [inputDescripcion, setInputDescripcion] = useState('');
    const [inputCantidad, setInputCantidad] = useState('');

    const HandleChange = (e) => {
        e.preventDefault();

        if( e.target.name === 'descripcion' ){
            setInputDescripcion(e.target.value);
        }
        else if( e.target.name === 'cantidad' ) {
            setInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    return (
        <Formulario >
            <ContenedorFiltros>
                <p>Select</p>
                <p>Date picker</p>
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