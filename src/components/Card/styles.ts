import styled from 'styled-components';

interface ContainerProps {
    size?: number;
    direction?: 'row' | 'column';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  margin: 0px 10px;
  width: ${props => props.size ? 100/props.size + 'vw' : '33vw'};
  border: 2px solid rgba(0,0,0,0.06);
  transition: all 0.3s ease-in-out;

  :hover {
      border-color: rgba(0,0,0,0.1);
  }

  @media (max-width: 868px) {
    width: 100vw;
  }
`;

export const ContainerTitle = styled.div`
    display: flex;
    border: 0px solid #F2F4F5;
    border-bottom-width: 1px;
    padding: 10px 10px;
    justify-content: center;
`;

export const ContainerBody = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    padding: 5px 20px;
    justify-content: center;
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 200;
    margin: 0px;
    text-align: center;
`;
