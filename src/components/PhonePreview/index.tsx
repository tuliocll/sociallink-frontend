import React from "react";

import { Container, Frame, Iframe } from "./styles";

export default function PhonePreview() {
  return (
    <Container>
      <Frame>
        <Iframe src="http://localhost:3000/user" />{" "}
      </Frame>
    </Container>
  );
}
