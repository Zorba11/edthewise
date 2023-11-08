import { ICardComponentProps, ITab } from "@edthewise/shared-ui-components";

export interface IExamsListProps {
  aCCAexamsList?: ICardComponentProps[];
  pSCExamsList?: ICardComponentProps[];
  medicalExamList: ICardComponentProps[];
  lawExamsList: ICardComponentProps[];
  tabs?: ITab[];
  showBadge?: boolean;
}
