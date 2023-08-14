import { AvatarDropDownMenu } from "@edthewise/shared-ui-components";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import edExamStartPic from "../assets/ed-white.png";
import { useRouterStore } from "mobx-state-router";

export const ExamStarter = () => {
  const routerStore = useRouterStore();

  const handleStartJourney = (e: any) => {
    e.preventDefault();
    routerStore.goTo("learnExamCard", {
      params: { id: 1 },
    });
  };

  return (
    <Box>
      <Box
        width={"100%"}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          right: "2rem",
          top: "2rem",
        }}
      >
        <AvatarDropDownMenu />
      </Box>
      <Container
        sx={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* hEADER */}
        {/* Exam information card */}
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              height: "35rem",
              width: "35rem",
              display: "flex",
              justifyContent: "center",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={edExamStartPic}
              alt="Ed the Wise"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Paper>
          <Paper
            elevation={4}
            sx={{
              height: "35rem",
              width: "50rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "2rem",
              }}
            >
              <Typography variant="subtitle1" component="h1">
                Greetings, seeker of knowledge! 🧙‍♂️✨ I am EdTheWise, your guide through the labyrinth of learning. Allow
                me to lead you on a journey through the annals of previous years' questions. Follow these ancient steps,
                and you shall find wisdom:
                <br></br>
                <br></br>
                <span>Sow Seeds of Answering: </span>
                For each question, four paths shall be laid before you. Choose with wisdom and mark the one that
                resonates with truth. Should doubts cloud your vision, ask, and I shall illuminate the way.
                <br></br>
                <br></br>
                <span>Journey's End and Reflection: </span>
                Upon completing your chosen path, click 'Submit.' Reflect upon your answers, for therein lies learning.
                I shall present you with a mirror of understanding, showing you the answers and the wisdom you have
                gained.
                <br></br>
                <br></br>
                <span>Embrace Continuous Learning: </span>
                Each trial through these ancient questions is a step toward mastery. Return often, explore new paths,
                and seek my counsel whenever you wish.
                <br></br>
                With wisdom, EdTheWise 🧙‍♂️✨
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    transition: "background-color 0.5s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#FDCD46",
                      color: "#4B82C3",
                    },
                    height: "3.6rem",
                  }}
                  onClick={handleStartJourney}
                >
                  Start Your Journey
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};
