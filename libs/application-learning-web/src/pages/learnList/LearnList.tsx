import { ExamsList } from "@edthewise/application-exams-web";
import { ICardComponentProps, withFadeIn } from "@edthewise/shared-ui-components";
import { useRouterStore } from "mobx-state-router";

export const LearnList: React.FC = () => {
  const routerStore = useRouterStore();

  const BUTTON_CARD_HEIGHT = "7rem";
  const BUTTON_CARD_WIDTH = "10rem";
  const BUTTON_CARD_FONT_SIZE = "1.5rem";
  const BUTTON_HOVER_COLOR = "#4B82C3";

  const learnExamSubjectNavigationClick = () => {
    routerStore.goTo("learnExamStarter", {
      params: { id: "1" },
    });
  };

  const tabs = [
    {
      id: 1,
      tabTitle: "Anatomy",
    },
  ];

  const mediCalTopics: ICardComponentProps[] = [
    {
      id: 1,
      title: "1",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 2,
      title: "2",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 3,
      title: "3",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 4,
      title: "4",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 5,
      title: "5",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 6,
      title: "6",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 7,
      title: "7",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
    {
      id: 8,
      title: "8",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: learnExamSubjectNavigationClick,
    },
  ];

  return withFadeIn(<ExamsList tabs={tabs} examsList={mediCalTopics} />);
};
