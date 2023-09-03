import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const AdminQuestionEntryForm = (props: any) => {
  const [formData, setFormData] = useState({
    qp1: "",
    qp2: "",
    qp3: "",
    qp4: "",
    qTable1: [],
    qTable2: [],
    qOptions: [],
    year: "",
    qAnswer: "",
    qId: "",
    qComponentOrder: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the form data
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          marginTop: "10rem",
        }}
      >
        <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
          EdTheWise Admin Board
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          label="QP1"
          name="qp1"
          value={formData.qp1}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QP2"
          name="qp2"
          value={formData.qp2}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QP3"
          name="qp3"
          value={formData.qp3}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QP4"
          name="qp4"
          value={formData.qp4}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QTable1"
          name="qTable1"
          value={formData.qTable1}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QTable2"
          name="qTable2"
          value={formData.qTable2}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QOptions"
          name="qOptions"
          value={formData.qOptions}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="Year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QAnswer"
          name="qAnswer"
          value={formData.qAnswer}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QId"
          name="qId"
          value={formData.qId}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          label="QComponent_Order"
          name="qComponentOrder"
          value={formData.qComponentOrder}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
