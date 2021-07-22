import styled from "styled-components";

const Contenedor = styled.div`
    /* background: #fff; */
    background: rgba( 255, 255, 255, 0.4 );
    width: 90%;
    max-width: 90rem; /*1110px*/
    height: 90vh;
    max-height: 50rem;  /* 800px */
    overflow-y: auto;
    /* box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05); */
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 0.625rem; /* 10px */
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 100;
 
    @media(max-width: 60rem){ /* 950px */
        height: 95vh;
        max-height: none;
    }
`;

export default Contenedor;