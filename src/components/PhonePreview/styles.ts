import styled from 'styled-components';

import frame from '../../resources/images/frame.png'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    min-height: 500px;
    padding: 10px;
`;

export const Frame = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${frame});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 60%;
    height: 100%;
`;

export const Iframe = styled.iframe`
    margin-top: 11px;
    width: 93%;
    height: 91%;
    border: 0px;
    border-radius: 8px;

    @media (max-width: 868px) {
        width: 58%;
        height: 92%;
        margin-top: 8px;
  }
`;
