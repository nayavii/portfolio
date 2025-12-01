import React from "react";
import { S } from "./Menu_Styles";

type MenuPropsType = {
  menuItems: Array<string>;
  justify?: string;
  gap?: string;
};

export const Menu: React.FC<MenuPropsType> = ({ menuItems, justify, gap }) => {
  return (
    <S.Menu justify={justify} gap={gap}>
      <ul>
        {menuItems.map((item, index) => (
          <S.ListItem key={index}>
            <S.Link href="#">{item}</S.Link>
          </S.ListItem>
        ))}
      </ul>
    </S.Menu>
  );
};
