import React from "react";
import { S } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill: React.FC<SkillPropsType> = ({ iconId, title }: SkillPropsType) => {
  return (
    <S.Skill>
      <S.StyledIcon iconId={iconId} />
      <S.SkillTitle>{title}</S.SkillTitle>
    </S.Skill>
  );
};

