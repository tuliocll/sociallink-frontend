import React from "react";
import { IoMdCreate, IoIosLink, IoIosKeypad } from "react-icons/io";

import {
  Container,
  ContainerField,
  ContainerImage,
  ContainerInfo,
  ButtonIcon,
  Field,
  Toggle,
  Image
} from "./styles";

export default function LinkCard() {
  return (
    <Container>
      <IoIosKeypad />
      <ContainerInfo>
        <ContainerField>
          <IoMdCreate />
          <Field />
        </ContainerField>

        <ContainerField>
          <IoIosLink />
          <Field />
        </ContainerField>
      </ContainerInfo>
      <ContainerImage>
        <Image src="https://api.adorable.io/avatars/285/abott@adorable.png" />
      </ContainerImage>
    </Container>
  );
}
