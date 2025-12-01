import React from "react";
import { S } from "./Menu_Styles";

type TabItemType = {
  title: string;
  status: string;
};
type MenuPropsType = {
  menuItems?: Array<string>;
  tabsItems?: TabItemType[];
  justify?: string;
  gap?: string;
  handleFilterChange?: (status: string) => void;
  currentFilterStatus?: string;
};

export const Menu: React.FC<MenuPropsType> = ({
  menuItems,
  tabsItems,
  justify,
  gap,
  handleFilterChange,
  currentFilterStatus,
}) => {
  const items = menuItems ?? tabsItems ?? [];
  return (
    <S.Menu justify={justify} gap={gap}>
      <ul>
        {items.map((item, index) => (
          <S.ListItem
            active={
              typeof item !== "string" && item.status === currentFilterStatus
            }
            key={index}
          >
            {typeof item === "string" ? (
              <S.Link href="">{item}</S.Link>
            ) : (
              <S.Link
                as={"button"}
                onClick={() =>
                  handleFilterChange && handleFilterChange(item.status)
                }
              >
                {item.title}
              </S.Link>
            )}
          </S.ListItem>
        ))}
      </ul>
    </S.Menu>
  );
};
