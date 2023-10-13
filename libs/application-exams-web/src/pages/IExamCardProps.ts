import { IExamCardData } from "./IExamCardData";

export interface IExamCardProps {
  onFinishHandler: (event: any) => void;
  withTimer: boolean;
  withNavigation: boolean;
  disableSubmit?: boolean;
  onSubmitHandler?: (event: any) => void;
  withEd?: boolean;
  sqQuestions?: any[];
  questionData: IExamCardData;
  goToNextQuestion: (event: any) => void;
  goToPrevQuestion: (event: any) => void;
  submittedQuestions: Set<number>;
  onQNumClick: (event: any, qNumber: number) => void;
  totalQuestions: number;
  showAnswer: boolean;
  showErr: boolean;
  startTime: number;
}
