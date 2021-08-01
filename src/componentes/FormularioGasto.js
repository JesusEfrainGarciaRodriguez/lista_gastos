import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

// Elementos
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from '../elementos/ElementosDeFormulario';
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import Boton from '../elementos/Boton';
import Alerta from '../elementos/Alerta';

// Img
import { ReactComponent as IconoPlus } from '../img/plus.svg';

// firebase
import { useAuth } from '../contextos/AuthContext';
import agregarGasto from '../firebase/agregarGasto';
import editarGasto from '../firebase/editarGasto';

// date-fns
import getUnixTime from 'date-fns/getUnixTime';
import fromUnixTime from 'date-fns/fromUnixTime';

const FormularioGasto = ({ gasto }) => {
    const history = useHistory();
    const [inputDescripcion, setInputDescripcion] = useState('');
    const [inputCantidad, setInputCantidad] = useState('');
    const [categoria, setCategoria] = useState('hogar');
    const [fecha, setFecha] = useState(new Date());
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});
    const { usuario } = useAuth();

    useEffect(() => {
        // Comprobamos si ya hay algun gasto
        // De ser asi establecemos todo el state con los valores del gasto
        if(gasto) {
            // Comprobamos que el gasto sea del usuario actual
            // Para eso comprobamos el uid guardado en el gasto con el uid del usuario
            if (gasto.data().uidUsuario === usuario.uid) {
                setInputDescripcion(gasto.data().descripcion);
                setInputCantidad(gasto.data().cantidad);
                setCategoria(gasto.data().categoria);
                setFecha(fromUnixTime(gasto.data().fecha));
            } 
            else {
                history.push('/lista');
            }
        }

    }, [gasto, usuario, history]);

    const handleChange = (e) => {
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

        // Transformamos la cantidad en numero y le pasamos 2 decimales
        let cantidad = parseFloat(inputCantidad).toFixed(2);

        // Comprobamos que haya una descripcion y valor
        if(inputDescripcion !== '' && inputCantidad !== '') {
            // Comprobamos que sea numero
            if(cantidad) {
                // Comprobamos si vamos a editar o agregar verificando si existe un gasto
                if(gasto) {
                    editarGasto({
                        id: gasto.id,
                        descripcion: inputDescripcion,
                        cantidad: cantidad,
                        categoria: categoria,
                        // Transformar fecha a formato unix
                        fecha: getUnixTime(fecha),
                    })
                    .then(() => {
                        history.push('/lista');
                    })
                    .catch((error) => {
                        setEstadoAlerta(true);
                        setAlerta({
                            tipo: 'error',
                            mensaje: 'Hubo un problema al intentar editar el gasto.'
                        });
                    });
                } 
                else {
                    agregarGasto({
                        descripcion: inputDescripcion,
                        cantidad: cantidad,
                        categoria: categoria,
                        // Transformar fecha a formato unix
                        fecha: getUnixTime(fecha),
                        uidUsuario: usuario.uid
                    })
                    .then(() => {
                        // Limpiar inputs
                        setCategoria('hogar');
                        setFecha(new Date());
                        setInputDescripcion('');
                        setInputCantidad('');
                        setEstadoAlerta(true);
                        setAlerta({
                            tipo: 'exito',
                            mensaje: 'El gasto fue agregado correctamente.'
                        });
                    })
                    .catch((error) => {
                        setEstadoAlerta(true);
                        setAlerta({
                            tipo: 'error',
                            mensaje: 'Hubo un problema al intentar agregar el gasto.'
                        });
                    });
                }
            }
            else {
                setEstadoAlerta(true);
                setAlerta({
                    tipo: 'error',
                    mensaje: 'El valor que ingresaste no es correcto.'
                });
            }
        }
        else {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Por favor rellene todos los campos.'
            });
        }
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
                    onChange={handleChange}
                />
                <InputGrande 
                    type="text"
                    name="cantidad"
                    id="cantidad"
                    placeholder="$0.00"
                    value={inputCantidad}
                    onChange={handleChange}
                />
            </div>
            <ContenedorBoton>
                <Boton as="button" type="submit" primario conIcono>
                    {gasto ? "Editar Gasto" : "Agregar Gasto"}
                    <IconoPlus />
                </Boton>
            </ContenedorBoton>

            <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={setEstadoAlerta}
            />
        </Formulario>
    );
}
 
export default FormularioGasto;