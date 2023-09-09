import { QP } from "./QP";

export interface ISQTitleProps {
  desc: string;
}

export const SQTitle = ({ desc }: ISQTitleProps) => {
  return <QP questionDesc={desc} bold={true} />;
};
