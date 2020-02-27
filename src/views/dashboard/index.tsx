import React from "react";

import { Container } from "./styles";
import { Card, PhonePreview, LinkList } from "../../components";

export default function dashboard() {
  return (
    <Container>
      <Card size={2} title="Prévia">
        <PhonePreview />
      </Card>
      <Card size={1} title="Links criados" direction="column">
        <>
          <LinkList />
        </>
      </Card>
    </Container>
  );
}
