import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  padding: 28px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.bg};
`;

export const S = {
  Header,
};
