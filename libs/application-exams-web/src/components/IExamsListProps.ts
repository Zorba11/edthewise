import { ICardComponentProps, ITab } from "@edthewise/shared-ui-components";

export interface IExamsListProps {
  aCCAexamsList: ICardComponentProps[];
  pSCExamsList: ICardComponentProps[];
  tabs?: ITab[];
  showBadge?: boolean;
}
