import React from "react";

import { Container, ContainerBody, ContainerTitle, Title } from "./styles";

export default function Card({
  children,
  size,
  title,
  direction
}: {
  children?: React.ReactChild;
  size?: number;
  title?: string;
  direction?: "row" | "column";
}) {
  return (
    <Container size={size}>
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
      <ContainerBody direction={direction}>{children}</ContainerBody>
    </Container>
  );
}
