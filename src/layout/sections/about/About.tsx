import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper justify="space-between" gap="20px">
          <Photo></Photo>
          <ContentWrapper>
            <SectionTitle>About me</SectionTitle>
            <FlexWrapper gap="12px" wrap="wrap">
              <Language>Russian - Native</Language>
              <Language>English - B2</Language>
              <Language>Spanish - B2</Language>
            </FlexWrapper>
            <Description>
              The long barrow was built on land previously inhabited in the
              Mesolithic period. It consisted of a sub-rectangular earthen
              tumulus, estimated to have been 15 metres (50 feet) in length,
              with a chamber built from sarsen megaliths on its eastern end.
              Both inhumed and cremated human remains were placed within this
              chamber during the Neolithic period, representing at least nine or
              ten individuals.
            </Description>
          </ContentWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  @media ${theme.media.tablet} {
    ${FlexWrapper}:first-child {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const Photo = styled.div`
  background-color: #ec8fff;
  min-width: 300px;
  min-height: 200px;

  @media ${theme.media.tablet} {
    margin: 0 auto;
    min-height: 300px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 10px 0 10px 20px;
  height: 100%;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    height: 80%;
    bottom: 0;
    left: 0;
    width: 5px;
    border-radius: 2px;
    background: ${theme.colors.gradient};

    @media ${theme.media.mobile} {
      height: 85%;
    }
  }

  @media ${theme.media.mobile} {
    padding-left: 16px;
  }
`;
const Language = styled.span`
  ${font({ FmaxSize: 12, FminSize: 10, color: theme.colors.bg })}
  padding: 8px 16px;
  background: ${theme.colors.gradient};
  border-radius: 6px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-top: 15px;
`;
