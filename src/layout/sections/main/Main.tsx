import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { Button } from "../../../components/button/Button";
import foto from "../../../assets/images/main_photo.png";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-between" align="center" gap="50px">
        <div>
          <MainTitle>WEB DEVELOPER</MainTitle>
          <Title>Erica Font</Title>
          <Description>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </Description>
          <Button link="#" title="Contact Me" />
        </div>
        <Photo src={foto} alt="" />
      </FlexWrapper>
      <Icon iconId={"arrowScroll"}/>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: #4a4545;
`

const MainTitle = styled.h1`
  
`

const Title = styled.h3`
  
`

const Description = styled.p`

`

const Photo = styled.img`
  width: 461px;
  height: 332px;
  object-fit: cover;
`;
