import { AdminMCQStore, AdminSQPreviewStore, IAdminMCQStore } from "@edthewise/application-admin-stores-web";
import { InputValidator } from "@edthewise/application-fairness-web";
import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouterStore } from "mobx-state-router";
import { container } from "@edthewise/common-admin-inversify";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";

export interface IAdminQuestionEntryFormProps {
  title: string;
}

export const AdminMCQEntryForm = (props: IAdminQuestionEntryFormProps) => {
  const routerStore = useRouterStore();
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

  const adminQStore: IAdminMCQStore = container.get<AdminMCQStore>(ADMIN_TOKENS.AdminMCQStoreToken);
  const adminSQPreviewStore = container.get<AdminSQPreviewStore>(ADMIN_TOKENS.AdminSQPreviewStoreToken);

  const inputValidator = new InputValidator();

  const handleNavigateToSQEntryForm = (event: any) => {
    event?.preventDefault();

    routerStore.goTo("sqEntryForm");
  };

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

    adminQStore.setCurrentFormData(formData);

    let validatedFormData;

    if (routerStore.getCurrentRoute()?.name === "sqMCQEntryForm") {
      // add sqID
      const sqId = adminSQPreviewStore.getSqid();
      validatedFormData = inputValidator.validateAdminMCQData(formData, collectionTitle, sqId);
    } else {
      validatedFormData = inputValidator.validateAdminMCQData(formData, collectionTitle);
    }

    const questionCreated = await adminQStore.createQuestionDocument(validatedFormData, collectionTitle);

    if (questionCreated) {
      if (routerStore.getCurrentRoute()?.name === "sqMCQEntryForm") {
        routerStore.goTo("sqPreview");
      } else {
        routerStore.goTo("mCQPreview");
      }
    }
    // Do something with the form data
  };

  useEffect(() => {
    if (adminQStore.shouldGetDataFromStore()) {
      const currentFormData = adminQStore.getCurrentFormData();
      setFormData(currentFormData);
    }
  }, [adminQStore]);

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
      <Button
        variant="contained"
        onClick={handleNavigateToSQEntryForm}
        sx={{ mt: 2, position: "fixed", top: "7rem", left: "70%" }}
      >
        Go to SQ Entry Form
      </Button>
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
          height: "auto",
          borderRadius: "1rem",
          marginTop: "11rem",
        }}
        elevation={3}
      >
        <TextField
          multiline
          label="QP1"
          name="qp1"
          value={formData?.qp1}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData?.qp1 ? true : false}
          helperText={error && !formData?.qp1 ? "This field is required" : null}
        />
        <TextField
          multiline
          label="QP2"
          name="qp2"
          value={formData?.qp2}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QP3"
          name="qp3"
          value={formData?.qp3}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QP4"
          name="qp4"
          value={formData?.qp4}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QTable1"
          name="qTable1"
          value={formData?.qTable1}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData?.qTable1 ? true : false}
          helperText={error && !formData?.qTable1 ? "This field is required" : null}
        />
        <TextField
          multiline
          label="QTable2"
          name="qTable2"
          value={formData?.qTable2}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QOptions"
          name="qOptions"
          value={formData?.qOptions}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData?.qOptions ? true : false}
          helperText={error && !formData?.qOptions ? "This field is required" : null}
        />
        <TextField
          multiline
          label="Year"
          name="year"
          value={formData?.year}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="QAnswer"
          name="qAnswer"
          value={formData?.qAnswer}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData?.qAnswer ? true : false}
          helperText={error && !formData?.qAnswer ? "This field is required" : null}
        />
        <TextField
          multiline
          label="QComponent_Order"
          name="qComponentOrder"
          value={formData?.qComponentOrder}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData?.qComponentOrder ? true : false}
          helperText={error && !formData?.qComponentOrder ? "This field is required" : null}
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
