import { Icon } from "../../../components/icon/Icon";
import { ButtonLink } from "../../../components/buttonLink/ButtonLink";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import React from "react";
import foto from "../../../assets/images/main_photo.png";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-between" wrap="wrap" align="center">
          <S.Content>
            <S.MainTitle>
              <p>FRONTEND DEVELOPER, WEB DESIGNER</p>
              <Typewriter
                options={{
                  strings: ["FRONTEND DEVELOPER", "WEB DESIGNER", "AND A GOOD PERSON"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </S.MainTitle>
            <S.Title>Hanna Alesik</S.Title>
            <S.Description>
              Blending structured design, clean logic and subtle visual depth
              into every interface I build.
            </S.Description>
            <FlexWrapper gap="25px" align="center">
              <ButtonLink link="#" title="Contact Me" />
              <ButtonLink link="#" title="Download CV" outlined />
            </FlexWrapper>
          </S.Content>
          <S.Photo src={foto} alt="" />
        </FlexWrapper>
        <S.IconWrapper>
          <Icon
            iconId={"arrowScroll"}
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          />
        </S.IconWrapper>
      </Container>
    </S.Main>
  );
};
