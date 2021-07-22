import { Link } from "react-router-dom";
import styled from "styled-components";

const Boton = styled(Link)`
    background: ${(props) => props.primario ? '#5B69E2' : '#457b9d'};
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    transition: transform ease-in .20s;
 
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }

    &:hover {
        background: ${(props) => props.primario ? '#4c5cf0' : '#2c80b5'};
        transform: scale(1.03);
    }
`;

export default Boton;