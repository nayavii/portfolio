import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ButtonLink } from "../../../../components/buttonLink/ButtonLink";
import React from "react";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
  imageSrc?: string;
  title?: string;
  tags?: string[];
  description?: string;
  demoLink?: string;
  codeLink?: string;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  return (
    <S.Project>
      <S.Image src={props.imageSrc} alt="" />
      <S.ContentWrapper>
        <S.Title>{props.title}</S.Title>
        <FlexWrapper gap="12px">
          {props.tags?.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </FlexWrapper>
        <S.Description>{props.description}</S.Description>
        <FlexWrapper gap="15px">
          <ButtonLink link="#" title="Demo" />
          <ButtonLink link="#" title="Code" outlined />
        </FlexWrapper>
      </S.ContentWrapper>
    </S.Project>
  );
};
