export interface ICardComponentProps {
  id: number;
  title: string;
  hoverColor?: string;
  subtitle?: string;
  buttonHeight?: string;
  buttonWidth?: string;
  titleFontSize?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  onClick?: () => void;
}
