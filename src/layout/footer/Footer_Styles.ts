import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  padding-bottom: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 45px;

  @media ${theme.media.tablet} {
    padding-bottom: 50px;
  }
`;

const SocialIconList = styled.ul`
  display: flex;
  gap: 76px;
  justify-content: center;
  align-items: center;

  @media ${theme.media.mobile} {
    gap: 45px;
  }
`;

const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SocialLink = styled.a``;

const SocialTitleLink = styled.a`
  font-size: 12px;
  line-height: 11.11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
`;

const Copyright = styled.small`
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.1em;

  @media ${theme.media.mobile} {
    font-size: 12px;
  }
`;

export const S = {
  Footer,
  SocialIconList,
  SocialItem,
  SocialLink,
  SocialTitleLink,
  Copyright,
};
