import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardComponent, AvatarDropDownMenu, ICardComponentProps } from "@edthewise/shared-ui-components";
import { Container } from "@mui/material";
import headLogo from "../../assets/headLogo.png";
import { useRouterStore } from "mobx-state-router";
import { ExamsList } from "@edthewise/application-exams-web";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const CompeteHome = () => {
  const [value, setValue] = React.useState(0);
  const routerStore = useRouterStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const domains = [
    {
      id: 1,
      tabTitle: "Medicine",
    },
    {
      id: 2,
      tabTitle: "PSC",
    },
  ];

  const BUTTON_CARD_HEIGHT = "7rem";
  const BUTTON_CARD_WIDTH = "13.5rem";
  const BUTTON_CARD_FONT_SIZE = "1.5rem";
  const BUTTON_HOVER_COLOR = "#FDCD46";

  const competeExamSubjectNavigationClick = () => {
    routerStore.goTo("competeList", {
      params: { subject: "medicine" },
    });
  };

  const mediCalTopics: ICardComponentProps[] = [
    {
      id: 1,
      title: "Anatomy",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(4, 1fr)",
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 2,
      title: "Pathology",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 3,
      title: "Pharmacology",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 4,
      title: "Microbiology",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 5,
      title: "Biochemistry",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 6,
      title: "Physiology",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 7,
      title: "Forensic Medicine",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 8,
      title: "Community Medicine",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
    {
      id: 9,
      title: "ENT",
      hoverColor: BUTTON_HOVER_COLOR,
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: competeExamSubjectNavigationClick,
    },
  ];

  return <ExamsList tabs={domains} examsList={mediCalTopics} />;
};
