import { IExamCardData } from "./IExamCardData";

export interface IExamCardProps extends IExamCardData {
  onFinishHandler: (event: any) => void;
  withTimer: boolean;
}
