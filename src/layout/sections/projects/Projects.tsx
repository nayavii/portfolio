import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { Menu } from "../../../components/menu/Menu";
import { Container } from "../../../components/Container";
import { projects } from "./projectsData";
import React, { useState } from "react";
import { S } from "./Projects_Styles";
import { Slider } from "../../../components/slider/Slider";

// const tabsName = projects.map((item) => item.category);

const uniqueCategories = Array.from(
  new Set(projects.map((item) => item.category))
);

const tabsName = [
  { title: "All", status: "all" },
  ...uniqueCategories.map((category) => ({
    title: category,
    status: category.toLowerCase(),
  })),
];

export const Projects: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  const filteredProjects =
    currentFilterStatus === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === currentFilterStatus
        );

  console.log(currentFilterStatus);
  console.log(filteredProjects);

  const handleFilterChange = (status: string) => {
    setCurrentFilterStatus(status);
  };

  const projectsItems = filteredProjects.map((item, index) => (
    <S.ProjectWrapper>
      <Project
        key={index}
        title={item.title}
        tags={item.tags}
        imageSrc={item.projectImage}
        description={item.description}
      />
    </S.ProjectWrapper>
  ));

  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <S.MenuWrapper>
          <Menu
            tabsItems={tabsName}
            justify="center"
            gap="40px"
            handleFilterChange={handleFilterChange}
            currentFilterStatus={currentFilterStatus}
          />
        </S.MenuWrapper>

        <Slider items={projectsItems} />
      </Container>
    </S.Projects>
  );
};
