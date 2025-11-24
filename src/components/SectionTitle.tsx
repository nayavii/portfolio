import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({ weight: 600, lineHeight: "26px", color: theme.colors.accent })}
  font-size: 24px;
  margin-bottom: 30px;

  @media ${theme.media.mobile} {
    margin-bottom: 20px;
  }
`;
