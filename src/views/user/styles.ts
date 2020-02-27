import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #283c86;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #45a247, #283c86);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #45a247, #283c86); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

export const ContainerUserInfo = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
`;

export const UserPhoto = styled.img`
    display: flex;
    align-self: center;
    width: 40%;
    border: 3px solid #fff;
    border-radius: 50%;
`;

export const UserName = styled.h2`
    color: #fff;
    text-align: center;
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const ContainerButton = styled.a`
    display: flex;
    margin-top: 10px;
    align-content: center;
    height: 100px;
    width: 100%;
    background: #fff;
    text-decoration: none;
    color: #449E4A;

    @media (max-width: 299px) {
        height: 80px;
  } 
    

`;

export const ImageButton = styled.img`
    height: 100%;

     @media (max-width: 299px) {
        height: 80px;
        width: 40%;
  } 
`;

export const ButtonText = styled.h2`
    align-self: center;
    text-align: center;
    margin: 0px 10px;
    font-size: 100%;
    word-break: keep-all;


    @media (max-width: 299px) {
        font-size: 15px;
  } 
`;