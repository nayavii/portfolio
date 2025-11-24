import { theme } from "./Theme";

type CommonFontPropsType = {
  weight?: number;
  color?: string;
  lineHeight?: number | string;
  FmaxSize?: number;
  FminSize?: number;
};

export const font = ({
  weight,
  color,
  lineHeight,
  FmaxSize,
  FminSize,
}: CommonFontPropsType) => `
  font-weight: ${weight || 400};
  color: ${color || theme.colors.text};  
  line-height: ${lineHeight || 1.2};
  font-size: min(calc( (100vw - 414px)/(1440 - 414) * (${FmaxSize} - ${FminSize}) + ${FminSize}px),  ${FmaxSize}px);
`;
