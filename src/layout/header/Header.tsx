import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { Menu } from "../../components/menu/Menu";


const menuItems = ['Home', 'Projects'];

export const Header = () => {
  return (
    <StyledHeader>
      <Menu menuItems={menuItems} />
      <Button link="#" title="Contact" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #d3b6fe;
  display: flex;
  gap: 87px;
  align-items: center;
  justify-content: center;
`