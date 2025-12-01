import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { Menu } from "../../../components/menu/Menu";
import { Container } from "../../../components/Container";
import { projects } from "./projectsData";
import projectImage from "../../../assets/images/project_image.png";
import React from "react";
import { S } from "./Projects_Styles";

const tabsName = projects.map((item) => item.category);

export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <S.MenuWrapper>
          <Menu menuItems={["All", ...tabsName]} justify="center" gap="40px" />
        </S.MenuWrapper>

        <FlexWrapper justify="space-between" wrap="wrap" gap="20px">
          {projects.map((item, index) => (
            <Project
              key={index}
              title={item.title}
              tags={item.tags}
              imageSrc={projectImage}
              description={item.description}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};

