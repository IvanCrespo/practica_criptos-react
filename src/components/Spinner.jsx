import React from 'react'
import '../styles/Spinner.css';
import styled from '@emotion/styled';

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px auto 0 auto;
`;


const Spinner = () => {
    return (
        <SpinnerContainer>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </SpinnerContainer>
    )
}

export default Spinner;