import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconList>
        <SocialItem>
          <SocialLink>
            <Icon iconId="gmailSvg" />
            <SocialTitle>gmail</SocialTitle>
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon iconId="linkedinSvg" />
            <SocialTitle>linkedIn</SocialTitle>
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon iconId="githubSvg" />
            <SocialTitle>github</SocialTitle>
          </SocialLink>
        </SocialItem>
      </SocialIconList>
      <Menu menuItems={["Projects", "Contact"]} />
      <Copyright>© 2025 Erica Font, All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #d3b6fe;
  
`;

const SocialIconList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const SocialLink = styled.a``;

const SocialTitle = styled.span``;

const Copyright = styled.small``;
