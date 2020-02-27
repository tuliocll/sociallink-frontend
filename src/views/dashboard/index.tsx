import React from "react";

import { Container } from "./styles";
import { Card, PhonePreview } from "../../components";

export default function dashboard() {
  return (
    <Container>
      <Card size={2} title="Prévia">
        <PhonePreview />
      </Card>
      <Card size={1} title="Links criados" />
    </Container>
  );
}
