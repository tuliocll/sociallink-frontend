import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  border: 2px solid #F2F4F5;
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0px;

  svg{
        color: rgba(0,0,0,0.4);
    }
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ContainerField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 4px;
    margin: 5px 10px;

    svg{
        margin: 0px 5px;
        color: rgba(0,0,0,0.4);
    }
`;

export const Field = styled.input`
    width: 100%;
    font-size: 20px;
    border: none;
`;

export const ContainerImage = styled.div``;

export const Image = styled.img`
    width: 72px;
`;

export const Toggle = styled.input``;

export const ButtonIcon = styled.button``;