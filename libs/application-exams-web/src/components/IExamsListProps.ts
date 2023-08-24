import { ICardComponentProps, ITab } from "@edthewise/shared-ui-components";

export interface IExamsListProps {
  examsList: ICardComponentProps[];
  tabs?: ITab[];
  showBadge?: boolean;
}
