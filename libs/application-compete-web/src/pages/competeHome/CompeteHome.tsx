import * as React from "react";
import { ICardComponentProps } from "@edthewise/shared-ui-components";
import { useRouterStore } from "mobx-state-router";
import { ExamsList } from "@edthewise/application-exams-web";
import { useContainer } from "@redtea/react-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { ExamsStore } from "@edthewise/application-stores-web";
import "reflect-metadata";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const CompeteHome = () => {
  const routerStore = useRouterStore();
  const container = useContainer();

  const examStore = container.get<ExamsStore>(TOKENS.ExamStoreToken);

  const title = examStore.aCCAsubjectTitles[0];

  const domains = [
    {
      id: 1,
      tabTitle: "ACCA",
    },
    {
      id: 2,
      tabTitle: "UPSC",
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

  const examTopics: ICardComponentProps[] = examStore.aCCAsubjectTitles.map((title, index) => ({
    id: index + 1,
    title,
    hoverColor: BUTTON_HOVER_COLOR,
    buttonHeight: BUTTON_CARD_HEIGHT,
    buttonWidth: BUTTON_CARD_WIDTH,
    titleFontSize: BUTTON_CARD_FONT_SIZE,
    onClick: () => competeExamSubjectNavigationClick(title),
  }));

  const pscExamsList: ICardComponentProps[] = examStore.pSCsubjectTitles.map((title, index) => ({
    id: index + 1,
    title,
    hoverColor: BUTTON_HOVER_COLOR,
    buttonHeight: BUTTON_CARD_HEIGHT,
    buttonWidth: BUTTON_CARD_WIDTH,
    titleFontSize: BUTTON_CARD_FONT_SIZE,
    onClick: () => competeExamSubjectNavigationClick(title),
  }));

  return <ExamsList showBadge={true} tabs={domains} aCCAexamsList={examTopics} pSCExamsList={pscExamsList} />;
};
