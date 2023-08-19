import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import qimagePlaceholder from "../assets/qImagePlaceholder.png";
import { useState } from "react";
import { LeftArrow, RightArrow, Timer } from "@edthewise/shared-ui-components";
import { QuestionNavigation } from "../components/QuestionNavigation";
import { IExamCardProps } from "./IExamCardProps";

export const ExamCard = (props: IExamCardProps) => {
  const qNumber = 1;
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleImageClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    // QuestionCard container
    <Box
      sx={{
        display: "flex",
        width: "70vw",
      }}
    >
      <Paper
        sx={{
          marginLeft: "7rem",
          marginTop: "3rem",
          width: "52rem",
          height: "40rem",
          padding: "2rem",
          borderRadius: "1rem",
        }}
        elevation={4}
      >
        {/* Question Description*/}
        <Box>
          <Typography variant="subtitle1" component="h1">
            Question {qNumber}:
          </Typography>
          <Typography variant="body1" component="p">
            Which bone forms the prominence of the cheek? Which bone forms the prominence of the cheek Which bone forms
            the prominence of the cheek Which bone forms the prominence of the cheek the prominence of the cheek Which
            bone forms the prominence of the cheek the prominence of the cheek Which bone forms the prominence of the
            cheek
          </Typography>
        </Box>
        {/* Question Image */}
        <Box
          sx={{
            marginTop: "1rem",
            width: isFullscreen ? "100%" : "45rem",
            height: isFullscreen ? "100vh" : "20rem",
            cursor: "pointer",
          }}
          onClick={handleImageClick}
        >
          <img src={qimagePlaceholder} alt="questionimage" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Box>
        {/* Question Options */}
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
          }}
        >
          <FormControl>
            <Grid container>
              <Grid item xs={4}>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              </Grid>
              <Grid
                sx={{
                  marginRight: "10rem",
                }}
                item
                xs={4}
              >
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                  <FormControlLabel value="something" control={<Radio />} label="other" />
                </RadioGroup>
              </Grid>
            </Grid>
          </FormControl>
          <Box
            sx={{
              position: "relative",
              left: "3rem",
              top: "1.7rem",
            }}
          >
            <Button
              sx={{
                width: "9rem",
                height: "3rem",
                backgroundColor: "#4B82C3",

                transition: "background-color 0.5s ease-in-out",
                "&:active": {
                  backgroundColor: "#FDCD46",
                  color: "#4B82C3",
                },
              }}
              variant="contained"
              onClick={props.onFinishHandler}
            >
              Submit
            </Button>
          </Box>
        </Box>
        {/* Answer Segment */}
        <Box
          sx={{
            marginTop: "1rem",
            width: "45rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <Typography visibility="visible" variant="body1" component="p">
            Answer: Other, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aut quasi a, nam itaque
            illo mollitia dolorum? Iste perferendis repudiandae, cupiditate sunt incidunt, maiores tempora sint velit
          </Typography> */}
        </Box>
      </Paper>

      {/* Timer, Navigation Board, Left & Right Arrows */}
      {/* Timer */}
      {props.withTimer && (
        <Box
          sx={{
            position: "relative",
            left: "14rem",
            top: "5rem",
          }}
        >
          <Timer />
        </Box>
      )}

      {/* Question Navigation Box */}
      <Box
        sx={{
          position: props.withTimer ? "relative" : "fixed",
          right: props.withTimer ? "8rem" : "2rem",
          top: props.withTimer ? "10rem" : "5rem",
        }}
      >
        <QuestionNavigation />
        {/* Left & Right Arrows */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3rem",
          }}
        >
          <LeftArrow />
          <RightArrow />
        </Box>
      </Box>
    </Box>
  );
};
