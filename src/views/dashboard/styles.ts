import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 868px) {
    flex-direction: column-reverse;
  }
`;
