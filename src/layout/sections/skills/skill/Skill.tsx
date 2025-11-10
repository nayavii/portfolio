import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;

}; 

export const Skill = ({iconId, title}:SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} />
      <SkillTitle>{title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  

`

const SkillTitle = styled.h3`
  

`