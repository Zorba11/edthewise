import { IExamCardData } from "./IExamCardData";

export interface IExamCardProps extends IExamCardData {
  onFinishHandler: (event: any) => void;
  withTimer: boolean;
  withNavigation: boolean;
  disableSubmit?: boolean;
  onSubmitHandler?: (event: any) => void;
  withEd?: boolean;
  sqQuestions?: any[];
}
