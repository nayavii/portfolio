import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

const Skills = styled.section`
  @media ${theme.media.large} {
    ${FlexWrapper} {
      gap: 80px 45px;
      justify-content: center;
    }
  }
`;

// Skill styles

const Skill = styled.div`
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  @media ${theme.media.mobile} {
    min-width: 135px;
    max-width: 100%;
  }
`;

const SkillTitle = styled.h3`
  font-weight: 400;
  letter-spacing: 13.54%;
  text-align: center;
  text-transform: uppercase;
  margin-top: 22px;

  @media ${theme.media.mobile} {
    margin-top: 16px;
  }
`;

const StyledIcon = styled(Icon)`
  width: 120px;
  height: 120px;

  @media ${theme.media.mobile} {
    width: 90px;
    height: 90px;
  }
`;

export const S = {
  Skills,
  Skill,
  SkillTitle,
  StyledIcon,
};
