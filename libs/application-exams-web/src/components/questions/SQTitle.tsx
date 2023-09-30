import { QP } from "../../../../shared-ui-components/src/lib/questions/QP";

export interface ISQTitleProps {
  desc: string;
}

export const SQTitle = ({ desc }: ISQTitleProps) => {
  return <QP questionDesc={desc} bold={true} />;
};
