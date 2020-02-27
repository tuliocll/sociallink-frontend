import styled from 'styled-components';

interface MenuProps {
    selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2A3035;
  height: 65px;
  justify-content: space-between;
  padding: 0px 50px;

  @media (max-width: 868px) {
    padding: 0px 5px;
  }
`;

export const ContainerMenu = styled.div`
    display: flex;

`;

export const ContainerLogo = styled.div`
    padding: 10px 30px;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
`;

export const Menu = styled.a<MenuProps>`
    color: #fff;
    margin: 20px;
    text-decoration: none;
    border: 0px solid #5CC4F3;
    border-bottom-width: ${props => props.selected ? '2px' : '0px'};
    border-radius: 2px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;

    :hover {
        color: #92afbd;
    }
`;