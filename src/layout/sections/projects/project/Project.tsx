import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/button/Button";
import styled from "styled-components";

type ProjectPropsType = {
  imageSrc?: string;
  title?: string;
  tags?: string[];
  description?: string;
  demoLink?: string;
  codeLink?: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.imageSrc} alt="" />
      <Title>{props.title}</Title>
      <FlexWrapper>
        {props.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </FlexWrapper>
      <Description>{props.description}</Description>
      <FlexWrapper>
        <Button link="#" title="Demo" />
        <Button link="#" title="Code" outlined />
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 522px;
`;

const Image = styled.img``;

const Title = styled.h3``;

const Tag = styled.span``;

const Description = styled.p``;
