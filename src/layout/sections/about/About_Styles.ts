import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { FlexWrapper } from "../../../components/FlexWrapper";

const About = styled.section`
  @media ${theme.media.tablet} {
    ${FlexWrapper}:first-child {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const Photo = styled.div`
  background-color: #ec8fff;
  min-width: 300px;
  min-height: 200px;

  @media ${theme.media.tablet} {
    margin: 0 auto;
    min-height: 300px;
  }

  @media ${theme.media.mobile} {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 10px 0 10px 20px;
  height: 100%;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    height: 80%;
    bottom: 0;
    left: 0;
    width: 5px;
    border-radius: 2px;
    background: ${theme.colors.gradient};

    @media ${theme.media.mobile} {
      height: 85%;
    }
  }

  @media ${theme.media.mobile} {
    padding-left: 16px;
  }
`;
const Language = styled.span`
  ${font({ FmaxSize: 12, FminSize: 10, color: theme.colors.bg })}
  padding: 8px 16px;
  background: ${theme.colors.gradient};
  border-radius: 6px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-top: 15px;
`;

export const S = {
  About,
  Photo,
  ContentWrapper,
  Language,
  Description,
};
