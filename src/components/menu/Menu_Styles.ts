import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

const Menu = styled.nav<{ justify?: string; gap?: string }>`
  width: 100%;
  margin-right: 32px;
  ul {
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justify || "flex-start"};
    gap: ${(props) => props.gap || "0px"};
  }
`;

const ListItem = styled.li<{ active?: boolean }>`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0%;
    left: 0;
    bottom: -3px;
    height: 2px;
    background: ${theme.colors.gradient};
    transition: width 0.3s ease;

    ${(props) =>
      props.active &&
      css<{ active?: boolean }>`
        width: 100%;
      `}
  }

  &:hover::before {
    width: 100%;
  }
`;

const Link = styled.a`
  color: ${theme.colors.accent};
  font-weight: 500;
`;

export const S = {
  Menu,
  ListItem,
  Link,
};
