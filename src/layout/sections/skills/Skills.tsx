import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";
import React from "react";
import { Fade } from "react-awesome-reveal";

const skillsData = [
  { iconId: "htmlSvg", title: "html" },
  { iconId: "cssSvg", title: "css" },
  { iconId: "javascriptSvg", title: "javascript" },
  { iconId: "typescriptSvg", title: "typescript" },
  { iconId: "reactjsSvg", title: "react js" },
  { iconId: "reactnativeSvg", title: "react native" },
  { iconId: "reduxSvg", title: "redux" },
  { iconId: "gitSvg", title: "git" },
  { iconId: "styledcomponentSvg", title: "styled component" },
  { iconId: "mongoSvg", title: "mongo bd" },
  { iconId: "postgresqlSvg", title: "postgresql" },
  { iconId: "jestSvg", title: "jest" },
  { iconId: "nestjsSvg", title: "nest js" },
  { iconId: "dockerSvg", title: "docker" },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="center" gap="60px 150px">
          <Fade cascade damping={0.1} triggerOnce>
            {skillsData.map(({ iconId, title }, index) => (
              <Skill key={index} iconId={iconId} title={title} />
            ))}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
