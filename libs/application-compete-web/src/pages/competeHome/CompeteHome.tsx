import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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

  const competeExamSubjectNavigationClick = () => {
    routerStore.goTo("competeList", {
      params: { subject: "medicine" },
    });
  };

  // Refactor this using data from the exams store

  const mediCalTopics: ICardComponentProps[] = [
    {
      id: 1,
      title: title, //"Business And Technology (BT)"
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 2,
      title: "Management Accounting (MA)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 3,
      title: "Financial Accounting (FA)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 4,
      title: "Corporate and Law (LW)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 5,
      title: "Peformance Management (PM)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 6,
      title: "Taxation (TX)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 7,
      title: "Financial Reporting (FR)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 8,
      title: "Audit and Assurance (AA)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 9,
      title: "Financial Management (FM)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 10,
      title: "Strategic Business Reporting (SBR)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 11,
      title: "Strategic Business Leader (SBL)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 12,
      title: "Advanced Financial Management (AFM)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 13,
      title: "Advanced Performance Management (APM)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 14,
      title: "Advanced Taxation (ATX)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 15,
      title: "Advanced Audit and Assurance (AAA)",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
  ];

  return <ExamsList showBadge={true} tabs={domains} examsList={mediCalTopics} />;
};
