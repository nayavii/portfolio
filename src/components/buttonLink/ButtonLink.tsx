import React from "react";
import { S } from "./ButtonLink_Styles";

type ButtonLinkPropsType = {
  link: string;
  title: string;
  outlined?: boolean;
};
export const ButtonLink: React.FC<ButtonLinkPropsType> = ({ link, title, outlined }: ButtonLinkPropsType) => {
  return (
    <S.Link href={link} outlined={outlined}>
      {title}
    </S.Link>
  );
};
