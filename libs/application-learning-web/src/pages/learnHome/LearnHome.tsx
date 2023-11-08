import { ExamsList } from "@edthewise/application-exams-web";
import { ComingSoon, ICardComponentProps, withFadeIn } from "@edthewise/shared-ui-components";
import { useRouterStore } from "mobx-state-router";

export const LearnHome = () => {
  const routerStore = useRouterStore();

  const BUTTON_CARD_HEIGHT = "7rem";
  const BUTTON_CARD_WIDTH = "13.5rem";
  const BUTTON_CARD_FONT_SIZE = "1.5rem";
  const BUTTON_HOVER_COLOR = "#4B82C3";

  const learnExamSubjectNavigationClick = () => {
    routerStore.goTo("learnList", {
      params: { subject: "anatomy" },
    });
  };

  const tabs = [
    {
      id: 1,
      tabTitle: "Medical",
    },
    {
      id: 2,
      tabTitle: "PSC",
    },
  ];

  const mediCalTopics: ICardComponentProps[] = [
    {
      id: 1,
      title: "Anatomy",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 2,
      title: "Pathology",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 3,
      title: "Pharmacology",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 4,
      title: "Microbiology",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 5,
      title: "Biochemistry",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 6,
      title: "Physiology",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 7,
      title: "Forensic Medicine",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 8,
      title: "Community Medicine",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 9,
      title: "ENT",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
  ];

  const lawExamsList: ICardComponentProps[] = [
    {
      id: 9,
      title: "ENT",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnExamSubjectNavigationClick,
    },
  ];

  return withFadeIn(<ExamsList lawExamsList={lawExamsList} tabs={tabs} medicalExamList={mediCalTopics} />);

  // return withFadeIn(<ComingSoon />);
};
