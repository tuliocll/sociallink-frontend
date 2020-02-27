import React from "react";

import { Container, ContainerBody, ContainerTitle, Title } from "./styles";

export default function Card({
  children,
  size,
  title
}: {
  children?: React.ReactChild;
  size?: number;
  title?: string;
}) {
  return (
    <Container size={size}>
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
      <ContainerBody>{children}</ContainerBody>
    </Container>
  );
}
