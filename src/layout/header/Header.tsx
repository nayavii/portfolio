import { ButtonLink } from "../../components/buttonLink/ButtonLink";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import React from "react"; 
import { S } from "./Header_Styles";

const menuItems = ["Home", "Projects"];

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Menu menuItems={menuItems} justify="space-between" />
          <ButtonLink link="#" title="Contact" />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
