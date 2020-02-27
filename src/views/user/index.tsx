import React from "react";

import {
  Container,
  ContainerButton,
  ContainerButtons,
  ContainerUserInfo,
  ButtonText,
  ImageButton,
  UserPhoto,
  UserName
} from "./styles";

export default function user() {
  return (
    <Container>
      <ContainerUserInfo>
        <UserPhoto src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        <UserName>@tuliocalil</UserName>
      </ContainerUserInfo>

      <ContainerButtons>
        <ContainerButton href="#">
          <ImageButton src="https://api.adorable.io/avatars/285/abott@adorable.png" />
          <ButtonText>Canal no Youtube</ButtonText>
        </ContainerButton>

        <ContainerButton href="#">
          <ImageButton src="https://api.adorable.io/avatars/285/abott@adorable.png" />
          <ButtonText>Canal no Youtube</ButtonText>
        </ContainerButton>
      </ContainerButtons>
    </Container>
  );
}
