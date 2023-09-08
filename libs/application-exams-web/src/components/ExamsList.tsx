import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardComponent, HeaderWithLogo } from "@edthewise/shared-ui-components";
import { Container } from "@mui/material";
import { IExamsListProps } from "./IExamsListProps";

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

export const ExamsList = (props: IExamsListProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* Header Container */}
      <HeaderWithLogo />
      {/* Title Message, Domain subject tabs */}
      <Container
        sx={{
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#4B82C3",
            }}
            gutterBottom
          >
            "Pick a subject, explore its questions, and battle brains worldwide for winning prizes <span>🎉</span>!"
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex", justifyContent: "center" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              {props.tabs?.map((tab, index) => (
                <Tab key={index} label={tab.tabTitle} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <CardComponent shouldAnimate={false} showBadge={props.showBadge} cardProps={props.examsList} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
      </Container>
    </Box>
  );
};
