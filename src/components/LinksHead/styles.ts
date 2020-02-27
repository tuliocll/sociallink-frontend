import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content: flex-end;
  align-content: center;
  flex-direction: row;
  background-color: #FFFFFF;
  height: 65px;
  padding-right: 20px;
`;

export const NewButton = styled.button`
    background-color: #5CC3F2;
    color: #fff;
    margin: 10px;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: #49a4ce;
        font-size: 14px;
    }
`;