import { AdminQStore, IAdminQStore } from "@edthewise/application-admin-stores-web";
import { InputValidator } from "@edthewise/application-fairness-web";
import { container } from "@edthewise/common-inversify";
import { ADMIN_TOKENS, TOKENS } from "@edthewise/common-tokens-web";
import { IExamCardData, client } from "@edthewise/foundation-appwrite";
import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export interface IAdminQuestionEntryFormProps {
  title: string;
}

export const AdminQuestionEntryForm = (props: IAdminQuestionEntryFormProps) => {
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

  const [error, setError] = useState("");

  const collectionTitle = props.title;

  const adminQStore: IAdminQStore = container.get<AdminQStore>(ADMIN_TOKENS.AdminQStoreToken);

  const inputValidator = new InputValidator();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    inputValidator.validateAdminQData(formData);

    await adminQStore.createQuestionDocument({}, collectionTitle);
    // Do something with the form data
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          backgroundColor: "#fff",
          zIndex: 1,
          paddingBottom: "2rem",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          EdTheWise
        </Typography>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Q form for{" "}
          <span
            style={{
              color: "#3f51b5",
            }}
          >
            ({collectionTitle})
          </span>
        </Typography>
      </Box>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          position: "sticky",
          backgroundColor: "#f5f5f5",
          height: "100vh",
          borderRadius: "1rem",
          marginTop: "11rem",
        }}
        elevation={3}
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
        {error && <Alert severity="error">{error}</Alert>}
        <Button
          style={{
            marginBottom: "2rem",
          }}
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
};
