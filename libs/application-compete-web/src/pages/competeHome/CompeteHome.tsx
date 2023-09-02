import * as React from "react";
import { ICardComponentProps } from "@edthewise/shared-ui-components";
import { useRouterStore } from "mobx-state-router";
import { ExamsList } from "@edthewise/application-exams-web";
import { examStore } from "@edthewise/application-stores-web";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const CompeteHome = () => {
  const routerStore = useRouterStore();
  const title = examStore.subjectTitles[0];

  const domains = [
    {
      id: 1,
      tabTitle: "ACCA",
    },
    {
      id: 2,
      tabTitle: "CPA",
    },
  ];

  const BUTTON_CARD_HEIGHT = "7rem";
  const BUTTON_CARD_WIDTH = "13.5rem";
  const BUTTON_CARD_FONT_SIZE = "1.2rem";
  const BUTTON_HOVER_COLOR = "#FDCD46";

  const competeExamSubjectNavigationClick = (title: string) => {
    routerStore.goTo("competeList", {
      queryParams: { subject: title },
    });
  };

  const mediCalTopics: ICardComponentProps[] = examStore.subjectTitles.map((title, index) => ({
    id: index + 1,
    title,
    hoverColor: BUTTON_HOVER_COLOR,
    buttonHeight: BUTTON_CARD_HEIGHT,
    buttonWidth: BUTTON_CARD_WIDTH,
    titleFontSize: BUTTON_CARD_FONT_SIZE,
    onClick: () => competeExamSubjectNavigationClick(title),
  }));

  return <ExamsList showBadge={true} tabs={domains} examsList={mediCalTopics} />;
};
