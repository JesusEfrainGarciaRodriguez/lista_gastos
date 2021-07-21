import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;

const Fondo = () => {
    return (
        <>
            <Svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320" 
                // Propiedad para que abarque toda la pantalla
                preserveAspectRatio="none">
                    <path
                        fillOpacity="1" 
                        d="M0,320L48,304C96,288,192,256,288,240C384,224,480,224,576,229.3C672,235,768,245,864,245.3C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
            </Svg>
        </>
    );
}
 
export default Fondo;