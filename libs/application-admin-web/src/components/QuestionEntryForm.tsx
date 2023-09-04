import { AdminQStore, IAdminQStore } from "@edthewise/application-admin-stores-web";
import { InputValidator } from "@edthewise/application-fairness-web";
import { container } from "@edthewise/common-inversify";
import { ADMIN_TOKENS, TOKENS } from "@edthewise/common-tokens-web";
import { IExamCardData, client } from "@edthewise/foundation-appwrite";
import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IMCQData } from "../models/IMCQData";
import { IValidatedQData } from "@edthewise/foundation-communication-admin";

export interface IAdminQuestionEntryFormProps {
  title: string;
}

export const AdminQuestionEntryForm = (props: IAdminQuestionEntryFormProps) => {
  const [formData, setFormData] = useState({
    qp1: "",
    qp2: "",
    qp3: "",
    qp4: "",
    qTable1: "",
    qTable2: "",
    qOptions: "",
    year: "",
    qAnswer: "",
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
    setError("");

    if (!formData.qp1 || !formData.qComponentOrder || !formData.qAnswer || !formData.qTable1) {
      setError("The highlighted fields are required, if you don't have the data, enter 'NA'");
      return;
    }

    const validatedFormData = inputValidator.validateAdminQData(formData, collectionTitle);

    await adminQStore.createQuestionDocument(validatedFormData, collectionTitle);
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
          multiline
          label="QP1"
          name="qp1"
          value={formData.qp1}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData.qp1 ? true : false}
          helperText={error && !formData.qp1 ? "This field is required" : null}
        />
        <TextField
          multiline
          label="QP2"
          name="qp2"
          value={formData.qp2}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QP3"
          name="qp3"
          value={formData.qp3}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QP4"
          name="qp4"
          value={formData.qp4}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QTable1"
          name="qTable1"
          value={formData.qTable1}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData.qp1 ? true : false}
          helperText={error && !formData.qp1 ? "This field is required" : null}
        />
        <TextField
          multiline
          label="QTable2"
          name="qTable2"
          value={formData.qTable2}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QOptions"
          name="qOptions"
          value={formData.qOptions}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData.qp1 ? true : false}
          helperText={error && !formData.qp1 ? "This field is required" : null}
        />
        <TextField
          multiline
          label="Year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QAnswer"
          name="qAnswer"
          value={formData.qAnswer}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData.qp1 ? true : false}
          helperText={error && !formData.qp1 ? "This field is required" : null}
        />
        <TextField
          multiline
          label="QComponent_Order"
          name="qComponentOrder"
          value={formData.qComponentOrder}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData.qp1 ? true : false}
          helperText={error && !formData.qp1 ? "This field is required" : null}
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
