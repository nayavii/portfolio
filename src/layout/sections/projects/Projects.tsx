import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import projectImage from "../../../assets/images/project_image.png";
import { Button } from "../../../components/button/Button";

const projectTags= ['React', 'TypeScript', 'CSS'];
export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper>
        <Project title="TITLE PROJECT" tags={projectTags} imageSrc={projectImage} description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
        <Project title="TITLE PROJECT" tags={projectTags} imageSrc={projectImage} description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
      </FlexWrapper>
      <Button link="#" title="See all projects"/>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: aliceblue;
`;
