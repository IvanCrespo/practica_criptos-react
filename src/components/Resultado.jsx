import styled from '@emotion/styled';
import React from 'react'

const ResultadoCript = styled.div`
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`;

const Texto = styled.p`
font-size: 18px;
span {
    font-weight: 700;
}
`;

const Precio = styled.p`
font-size: 26px;
span {
    font-weight: 700;
}
`;

const Imagen = styled.img`
display: block;
width: 120px;
`;

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    return (
        <ResultadoCript>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto' />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 hrs: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </ResultadoCript>
    )
}


export default Resultado;